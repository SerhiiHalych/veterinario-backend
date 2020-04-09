import { AnimalName } from './valueObjects/AnimalName';
import { AnimalGender } from './enums/AnimalGender';
import { Auditable } from '../../common/typings/Auditable';
import { AnimalID } from './valueObjects/AnimalID';
import { ClientID } from '../client/valueObjects/ClientID';
import { AuditData } from '../../common/valueObjects/AuditData';

export abstract class Animal implements Auditable<AnimalID> {
  private _animalID: AnimalID;
  private _name: AnimalName;
  private _gender: AnimalGender;
  private _ownerID: ClientID;
  private _auditData: AuditData;

  public getAuditData(): AuditData {
    return this._auditData;
  }

  public isNew(): boolean {
    return this._ownerID.clientID === null;
  }

  public getID(): AnimalID {
    return this._animalID;
  }

  public get name(): AnimalName {
    return this._name;
  }

  public get gender(): AnimalGender {
    return this._gender;
  }

  public get ownerID(): ClientID {
    return this._ownerID;
  }
}
