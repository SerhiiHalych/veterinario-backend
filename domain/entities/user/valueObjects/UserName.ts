import { ValueObject } from '../../../common/ValueObject';

export class Username extends ValueObject {
  private readonly _username: string | null;

  constructor(username: string | null) {
    super();

    this._username = username;
  }

  public get name() {
    return this._username;
  }
}
