import { Username } from './valueObjects/UserName';
import { UserStatus } from './enums/UserStatus';
import { LoginDates } from './valueObjects/LoginDates';
import { AuditData } from '../../common/valueObjects/AuditData';
import { InvitedOn } from './valueObjects/InvitedOn';
import { UserInputData } from './dataStructures/UserInputData';
import { Auditable } from '../../common/typings/Auditable';
import { UserID } from './valueObjects/UserID';

export class User implements Auditable<UserID> {
  private _userID: UserID;
  private _username: Username;
  private _status: UserStatus;
  private _invitedOn: InvitedOn;
  private _auditData: AuditData;
  private _loginDates: LoginDates;

  constructor(inputData: UserInputData) {
    const { invitedOn, loginDates, auditData, status, username } = inputData;

    this._invitedOn = invitedOn;
    this._loginDates = loginDates;
    this._auditData = auditData;
    this._status = status;
    this._username = username;
  }

  public getAuditData(): AuditData {
    return this._auditData;
  }

  public isNew(): boolean {
    return this._userID.userID === null;
  }

  public getID(): UserID {
    return this._userID;
  }

  public get username(): Username {
    return this._username;
  }

  public get status(): UserStatus {
    return this._status;
  }

  public get invitedOn(): InvitedOn {
    return this._invitedOn;
  }

  public get modificationDates(): AuditData {
    return this._auditData;
  }

  public get loginDates(): LoginDates {
    return this._loginDates;
  }
}
