import { BlogModel } from "../models/blog.model.js";

export const getBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.find();
    // console.log("blogs", blogs);
    res.send(blogs)
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createBLog = async function (req, res) {
  try {
    const newBLog = req.body;
    const blog = new BlogModel(newBLog);
    await blog.save();

    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getReview = (req, res) => {
  const newReview = [ {
    img: 'dfdffdf',
    img2: 'dfdfdfdf'
  }]
  res.send(newReview)
}