import { Persistable } from './Persistable';
import { AuditData } from '../valueObjects/AuditData';
import { ValueObject } from '../ValueObject';

export interface Auditable<TID extends ValueObject> extends Persistable<TID> {
  getAuditData(): AuditData;
}
