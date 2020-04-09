import { ValueObject } from '../../../common/ValueObject';

export class EmployeeID extends ValueObject {
  private readonly _employeeID: number | null;

  constructor(employeeID: number | null) {
    super();

    // TODO: check dates (employeeID is positive)

    this._employeeID = employeeID;
  }

  public get employeeID(): number | null {
    return this._employeeID;
  }
}
