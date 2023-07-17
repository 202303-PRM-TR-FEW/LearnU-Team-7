import { User } from "@/models/User";
import { Course } from "@/models/Course";
import { connectToDb } from "@/utils/database";
import mongoose, { Mongoose, Schema } from "mongoose";

const users = [
  {
    _id: new mongoose.Types.ObjectId(),
    username: "Furkan",
    email: "Furkan@gmail.com",
    password: "password123",
    location: "Istanbul",
    profilePicture: "",
    streak: 0,
    followers: [],
    following: [],
    hoursSpent: 0,
    finishedCourses: [],
    loginState: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    username: "Amdjed",
    email: "Amdjed@gmail.com",
    password: "password123",
    location: "Istanbul",
    profilePicture: "",
    streak: 0,
    followers: [],
    following: [],
    hoursSpent: 0,
    finishedCourses: [],
    loginState: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    username: "Tugba",
    email: "Tugba@gmail.com",
    password: "password123",
    location: "Istanbul",
    profilePicture: "",
    streak: 0,
    followers: [],
    following: [],
    hoursSpent: 0,
    finishedCourses: [],
    loginState: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    username: "Ebla",
    email: "Ebla@gmail.com",
    password: "password123",
    location: "Istanbul",
    profilePicture: "",
    streak: 0,
    followers: [],
    following: [],
    hoursSpent: 0,
    finishedCourses: [],
    loginState: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    username: "john",
    email: "john@example.com",
    password: "password1",
    location: "New York",
    profilePicture: "profile1.jpg",
    streak: 10,
    followers: [],
    following: [],
    hoursSpent: 50,
    finishedCourses: [],
    loginState: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    username: "emma",
    email: "emma@example.com",
    password: "password2",
    location: "London",
    profilePicture: "profile2.jpg",
    streak: 5,
    followers: [],
    following: [],
    hoursSpent: 30,
    finishedCourses: [],
    loginState: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    username: "alex",
    email: "alex@example.com",
    password: "password3",
    location: "San Francisco",
    profilePicture: "profile3.jpg",
    streak: 15,
    followers: [],
    following: [],
    hoursSpent: 80,
    finishedCourses: [],
    loginState: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    username: "lisa",
    email: "lisa@example.com",
    password: "password4",
    location: "Paris",
    profilePicture: "profile4.jpg",
    streak: 8,
    followers: [],
    following: [],
    hoursSpent: 45,
    finishedCourses: [],
    loginState: false,
  },
];


const courses = [
  {
    _id:new mongoose.Types.ObjectId(),
    name: "Introduction to Programming",
    teacherName: "Alex",
    duration: 10,
    rating: 4.5,
    description: "Learn the basics of programming.",
    price: 50,
    recommendedCourses: [],
  },
  {
    _id:new mongoose.Types.ObjectId(),
    name: "Web Development 101",
    teacherName: "Sophia",
    duration: 15,
    rating: 4.8,
    description: "Master the fundamentals of web development.",
    price: 75,
    recommendedCourses: [],
  },
  {
    _id:new mongoose.Types.ObjectId(),
    name: "Data Science Fundamentals",
    teacherName: "David",
    duration: 12,
    rating: 4.3,
    description: "Explore the world of data science and analytics.",
    price: 90,
    recommendedCourses: [],
  },
  {
    _id:new mongoose.Types.ObjectId(),
    name: "Mobile App Development",
    teacherName: "Sarah",
    duration: 18,
    rating: 4.6,
    description: "Build cross-platform mobile apps using React Native.",
    price: 100,
    recommendedCourses: [],
  },

];

const createSampleData = async () => {
  try {
    await connectToDb();
    await User.deleteMany({});
    await Course.deleteMany({});
    for (const course of courses) {
      const newCourse = new Course(course);
      await newCourse.save();
    }
    for (const user of users) {
      const newUser = new User(user);
      newUser.finishedCourses.push(courses[0]._id);
      newUser.courses.push(courses[0]._id);
      await newUser.save();
    }
    console.log("Data created successfully!");
  } catch (error) {
    console.error("Error creating data:", error);
  }
};
export default createSampleData;