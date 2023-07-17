import mongoose, { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  courses: [{
    type: Schema.Types.ObjectId,
    ref: "Course",
  }],
  achievements: [
    {
      type: Schema.Types.ObjectId,
      ref: "Achievement",
    }
  ],
  username: {
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
  location: {
    type: String,
  },
  profilePicture: {
    type: String,
  },
  streak: {
    type: Number,
    default: 0,
  },
  followers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    }
  ],
  following: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    }
  ],
  hoursSpent: {
    type: Number,
    default: 0,
  },
  finishedCourses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    }
  ],
  loginState: {
    type: Boolean,
    default: false,
  },
});

export const User = models.User || model("User", userSchema);