import { BaseError } from "./BaseError";

export class NotFound extends BaseError {
  constructor(
    public message: string = "URL solicitada não pode ser encontrada no servidor"
  ) {
    super(404, message);
  }
}
