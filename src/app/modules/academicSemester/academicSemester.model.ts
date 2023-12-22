
import mongoose, { Schema } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';

const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: String,
  year: String,
  code: String,
  startMonth: {
    type: String,
    enum: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
  endMonth: {
    type: String,
    enum: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
}, {timestamps : true});

export const academicSemester = mongoose.model<TAcademicSemester>('academicSemester', academicSemesterSchema);