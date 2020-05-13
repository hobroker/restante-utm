import { Schema } from 'mongoose';

export default {
  name: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: false,
  },
};
