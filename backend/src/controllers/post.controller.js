import { Post } from "../models/post.model.js";

// create a post
const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;

    if (!name || !description || !age) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const post = await Post.create({ name, description, age });
    return res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

// Get a post
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(202).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", Error });
  }
};

// update a post
const updatePost = async (req, res) => {
  try {
    // basic validation(to check for an empty object/string)
    if (Object.keys(req.body) === 0) {
      return res.status(400).json({
        message: "No data provided for update",
      });
    }

    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!post)
      res.status(404).json({
        message: "Post not found",
      });

      res.status(200).json({
        message: "post updated successfully", post
      });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

// delete a post
const deletePost = async (req, res) => {
  try {
    const deleted = await Post.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({
      message:"Post not found"
    });
    res.status(200).json({
      message:"Post successfully deleted"
    })
  } catch (error) {
    res.status(500).json({
      message:"Internal Server Error", error
    });
  };
  };


export { createPost, getPosts, updatePost, deletePost };
