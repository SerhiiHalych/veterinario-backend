import { ValueObject } from '../../../common/ValueObject';

export class InvitedOn extends ValueObject {
  private readonly _invitedOn: Date | null;

  constructor(invitedOn: Date) {
    super();

    // TODO: check dates (invitedOn <= now)

    this._invitedOn = invitedOn;
  }

  public get invitedOn(): Date | null {
    return this._invitedOn;
  }
}
