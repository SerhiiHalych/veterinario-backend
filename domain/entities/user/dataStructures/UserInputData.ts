import { Username } from '../valueObjects/UserName';
import { UserStatus } from '../enums/UserStatus';
import { InvitedOn } from '../valueObjects/InvitedOn';
import { AuditData } from '../../../common/valueObjects/AuditData';
import { LoginDates } from '../valueObjects/LoginDates';

export type UserInputData = {
  username: Username;
  status: UserStatus;
  invitedOn: InvitedOn;
  auditData: AuditData;
  loginDates: LoginDates;
};
