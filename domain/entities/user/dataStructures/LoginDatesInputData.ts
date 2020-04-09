export type LoginDatesInputData =
  | {
      firstLogin: Date;
      lastLogin: Date;
    }
  | {
      firstLogin: null;
      lastLogin: null;
    };
