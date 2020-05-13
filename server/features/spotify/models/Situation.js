import { Schema } from 'mongoose';

export default {
  studentId: {
    type: Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  subjectId: {
    type: Schema.Types.ObjectId,
    ref: 'Subiect',
    required: true,
  },
  stare: {
    type: String,
    required: false,
  },
};