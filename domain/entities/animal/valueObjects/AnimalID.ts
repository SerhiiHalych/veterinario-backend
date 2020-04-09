import { ValueObject } from '../../../common/ValueObject';

export class AnimalID extends ValueObject {
  private readonly _animalID: number | null;

  constructor(animalID: number | null) {
    super();

    // TODO: check dates (employeeID is positive)

    this._animalID = animalID;
  }

  public get animalID(): number | null {
    return this._animalID;
  }
}
