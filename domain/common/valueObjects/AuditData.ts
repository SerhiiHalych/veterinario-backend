import { ValueObject } from '../ValueObject';
import { AuditInputData } from '../dataStructures/ModificationDatesInputData';
import { User } from '../../entities/user/User';

export class AuditData extends ValueObject {
  private readonly _createdDate: Date;
  private readonly _lastModifiedDate: Date;
  private readonly _createdBy: User | null;
  private readonly _lastModifiedBy: User | null;

  constructor(inputData: AuditInputData) {
    super();

    const { createdBy, createdDate, lastModifiedBy, lastModifiedDate } = inputData;

    // TODO: check dates (firstLogin <= lastLogin)

    this._createdDate = createdDate ?? new Date();
    this._lastModifiedDate = lastModifiedDate ?? this._createdDate;
    this._createdBy = createdBy;
    this._lastModifiedBy = lastModifiedBy;
  }

  public get createdDate(): Date {
    return this._createdDate;
  }

  public get lastModifiedDate(): Date {
    return this._lastModifiedDate;
  }

  public get createdBy(): User | null {
    return this._createdBy;
  }

  public lastModifiedBy(): User | null {
    return this._lastModifiedBy;
  }
}
