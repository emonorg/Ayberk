const Ajv = require("ajv");
const { default: sendResponse } = require("../../ResponseBuilder");
const { default: HttpException } = require("../../exceptions/HttpException");
const { default: ResponseType } = require("../../types/Response.type");

/**
 * This class is written by @Simponplend
 * @github simonplend/express-json-validator-middleware
 * NOTE: Some changes are applied
 */

/**
 * Express middleware for validating requests
 *
 * @class Validator
 */
class Validator {
	
	ajv = null

	/**
	 * Validator method to be used as middleware
	 *
	 * @param {Object} options Options in format { request_property: schema }
	 * @returns
	 */
	static validate(options) {
		// Check if ajv has been initiated
		if (!this.ajv) {
			this.ajv = new Ajv();
			this.validate = this.validate.bind(this);
		}

		// Self is a reference to the current Validator instance
		const self = this;

		// Cache validate functions
		const validateFunctions = Object.keys(options)
			.map(function(
				requestProperty
				) {
					const schema = options[requestProperty];
					if (typeof schema === "function") {
						return { requestProperty, schemaFunction: schema };
					}
					const validateFunction = this.ajv.compile(schema);
					return { requestProperty, validateFunction };
				},
				self);

		// The actual middleware function
		return (req, res, next) => {
			let validationErrors = {};

			for (let {
				requestProperty,
				validateFunction,
				schemaFunction
			} of validateFunctions) {
				if (!validateFunction) {
					// Get the schema from the dynamic schema function
					const schema = schemaFunction(req);
					validateFunction = this.ajv.compile(schema);
				}

				// Test if property is valid
				const valid = validateFunction(req[requestProperty]);
				if (!valid) {
					validationErrors[requestProperty] = validateFunction.errors;
				}
			}

			if (Object.keys(validationErrors).length !== 0) {
				// Send framework based responses
				return sendResponse(res, 400, new ResponseType({
					success: false,
					message: 'Validation error!'
				}, validationErrors.body))
			} else {
				next();
			}
		};
	}
}

export default Validator = Validator;

