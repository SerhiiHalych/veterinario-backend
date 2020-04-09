import { Person } from '../person/Person';
import { Auditable } from '../../common/typings/Auditable';
import { EmployeeID } from './valueObjects/EmployeeID';
import { AuditData } from '../../common/valueObjects/AuditData';
import { UserID } from '../user/valueObjects/UserID';

export class Employee extends Person implements Auditable<EmployeeID> {
  private _employeeID: EmployeeID;
  private _userID: UserID;
  private _auditData: AuditData;

  public getAuditData(): AuditData {
    return this._auditData;
  }

  public isNew(): boolean {
    return this._employeeID.employeeID === null;
  }

  public getID(): EmployeeID {
    return this._employeeID;
  }

  public get userID(): UserID {
    return this._userID;
  }
}
