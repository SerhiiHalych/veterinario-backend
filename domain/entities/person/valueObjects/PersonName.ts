import { ValueObject } from '../../../common/ValueObject';
import { PersonNameInputData } from '../dataStructures/PersonName';

export class PersonName extends ValueObject {
  private readonly _firstName: string;
  private readonly _lastName: string;
  private readonly _middleName: string | null;
  private readonly _prefix: string | null;
  private readonly _suffix: string | null;

  constructor(personName: PersonNameInputData) {
    super();

    const { firstName, lastName, middleName, prefix, suffix } = personName;

    this._firstName = firstName;
    this._lastName = lastName;
    this._middleName = middleName;
    this._prefix = prefix;
    this._suffix = suffix;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public get middleName(): string | null {
    return this._middleName;
  }

  public get prefix(): string | null {
    return this._prefix;
  }

  public get suffix(): string | null {
    return this._suffix;
  }

  public getFullName(): string {
    const prefix = this._prefix !== null ? `${this._prefix} ` : '';
    const firstName = `${this.firstName} `;
    const middleName = this._middleName !== null ? `${this.middleName} ` : '';
    const lastName = `${this._lastName}`;
    const suffix = this.suffix !== null ? ` ${this._suffix}` : '';

    return `${prefix}${firstName}${middleName}${lastName}${suffix}`;
  }
}
