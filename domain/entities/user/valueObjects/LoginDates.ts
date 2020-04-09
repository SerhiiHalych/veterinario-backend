import { ValueObject } from '../../../common/ValueObject';
import { LoginDatesInputData } from '../dataStructures/LoginDatesInputData';

export class LoginDates extends ValueObject {
  private readonly _firstLogin: Date | null;
  private readonly _lastLogin: Date | null;

  constructor(inputData: LoginDatesInputData) {
    super();

    const { firstLogin, lastLogin } = inputData;

    // TODO: check dates (firstLogin <= lastLogin)

    this._firstLogin = firstLogin;
    this._lastLogin = lastLogin;
  }

  public get firstLogin(): Date | null {
    return this._firstLogin;
  }

  public get lastLogin(): Date | null {
    return this._lastLogin;
  }
}
