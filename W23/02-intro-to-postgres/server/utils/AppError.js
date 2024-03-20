export default class AppError extends Error {
  constructor(message = "Something went wrong!", status = 500) {
    super(message); // call the parent constructor
    this.status = status;
  }
}
