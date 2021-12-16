import mongoose from "mongoose";

const blog = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    title: {
      type: "string",
      required: true,
    },
    content: {
      type: "string",
      required: true,
    },
    likeTym: {
      type: Number,
      default: 0,
    },
    address: {
      type: String,
    },
    styles: {
      type: String,
    },
  },
  { timestamps: true }
);

export const BlogModel = mongoose.model("Blog", blog);
