export type TMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

// Example usage:

export type TAcademicSemester = {
  name: string;
  year: string;
  code: string;
  startMonth: TMonths;
  endMonth: TMonths;
};
