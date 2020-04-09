import { ValueObject } from '../../../common/ValueObject';

export class ClientID extends ValueObject {
  private readonly _clientID: number | null;

  constructor(clientID: number | null) {
    super();

    // TODO: check dates (clientID is positive)

    this._clientID = clientID;
  }

  public get clientID(): number | null {
    return this._clientID;
  }
}
