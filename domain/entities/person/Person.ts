import { PersonName } from './valueObjects/PersonName';
import { PersonGender } from './enums/PersonGender';

export abstract class Person {
  private _name: PersonName;
  private _gender: PersonGender;

  public get name(): PersonName {
    return this._name;
  }

  public get gender(): PersonGender {
    return this._gender;
  }
}
