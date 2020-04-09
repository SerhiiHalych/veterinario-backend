import { ValueObject } from '../ValueObject';

export interface Persistable<TID extends ValueObject> {
  getID(): TID | null;
  isNew(): boolean;
}
