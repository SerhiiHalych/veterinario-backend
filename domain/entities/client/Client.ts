import { Person } from '../person/Person';
import { ClientID } from './valueObjects/ClientID';
import { AuditData } from '../../common/valueObjects/AuditData';
import { Auditable } from '../../common/typings/Auditable';
import { UserID } from '../user/valueObjects/UserID';

export class Client extends Person implements Auditable<ClientID> {
  private _clientID: ClientID;
  private _userID: UserID;
  private _auditData: AuditData;

  public getAuditData(): AuditData {
    return this._auditData;
  }

  public isNew(): boolean {
    return this._clientID.clientID === null;
  }

  public getID(): ClientID {
    return this._clientID;
  }

  public get userID(): UserID {
    return this._userID;
  }
}
