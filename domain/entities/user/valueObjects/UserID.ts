import { ValueObject } from '../../../common/ValueObject';

export class UserID extends ValueObject {
  private readonly _userID: number | null;

  constructor(userID: number | null) {
    super();

    // TODO: check dates (userID is positive)

    this._userID = userID;
  }

  public get userID(): number | null {
    return this._userID;
  }
}
