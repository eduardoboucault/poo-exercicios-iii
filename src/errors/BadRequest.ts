import { BaseError } from "./BaseError";

export class BadRequest extends BaseError {
  constructor(
    public message: string = "Requisição inválida"
  ) {
    super(400, message);
  }
}
