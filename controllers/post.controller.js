import { PostModel } from "../models/post.model.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    // console.log("posts", posts);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createPost = async function (req, res) {
  try {
    const newPost = req.body;
    const post = new PostModel(newPost);
    await post.save();

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updatePost = async function (req, res) {
  try {
    const updatePost = req.body;

    const post = await PostModel.findOneAndUpdate(
      { _id: updatePost.id },
      updatePost,
      { new: true }
    );
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
