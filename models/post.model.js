import mongoose from "mongoose";

const post = new mongoose.Schema(
  {
    title: {
      type: "string",
      required: true,
    },
    content: {
      type: "string",
      required: true,
    },
    author: {
      type: "string",
      required: true,
      default: "Anonymous",
    },
    attachment: String,
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const PostModel = mongoose.model("Post", post);
