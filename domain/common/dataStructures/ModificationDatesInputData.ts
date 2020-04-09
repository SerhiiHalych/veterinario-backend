import { User } from '../../entities/user/User';

export type AuditInputData = {
  createdDate: Date | null;
  lastModifiedDate: Date | null;
  createdBy: User | null;
  lastModifiedBy: User | null;
};
