const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    goals: [{
      type: Schema.Types.ObjectId,
      ref: 'Goal'
    }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;