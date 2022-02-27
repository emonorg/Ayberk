/**
 * Define a JSON schema.
 */
 export const sayHelloSchema = {
  type: 'object',
  required: ['message'],
  properties: {
    street: {
      type: 'string',
    },
  },
};
