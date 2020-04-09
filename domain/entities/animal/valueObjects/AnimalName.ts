import { ValueObject } from '../../../common/ValueObject';

export class AnimalName extends ValueObject {
  private readonly _name: string | null;

  constructor(name: string | null) {
    super();

    this._name = name;
  }

  public get name() {
    return this._name;
  }
}
