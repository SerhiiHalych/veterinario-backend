export abstract class ValueObject {
  public equals<TValueObject extends ValueObject>(obj: TValueObject): boolean {
    if (!obj) {
      return false;
    }

    const thisValues = Object.entries(this);
    const otherValues = Object.entries(obj);

    const isSameValuesCount = thisValues.length === otherValues.length;

    const areAtomicValuesEqual = thisValues.every(([key, value]) =>
      otherValues.some(([innerKey, innerValue]) => innerKey === key && innerValue === value)
    );

    return isSameValuesCount && areAtomicValuesEqual;
  }
}
