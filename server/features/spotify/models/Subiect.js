import { Schema } from 'mongoose';

export default {
  name: {
    type: String,
    required: true,
  },
  puncte: {
    type: Number,
    required: false,
  },
};
