export default class Response {
  public meta: {
    success?: boolean,
    message?: string,
    nextStep?: string
  };
  public data: object;
  public pagination?: object;

  constructor(meta: { success: boolean, message?: string }, data?: object, pagination?: object) {
    this.meta = meta;
    this.data = data;
    this.pagination = pagination;
  }
}
