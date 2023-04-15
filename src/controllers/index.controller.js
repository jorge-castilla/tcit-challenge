
const path = require('path');
const { Post } = require('../../sequelize/models');


const getPosts = async (req, res) =>{
    try {
        const response = await Post.findAll()
        res.json(response)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching posts' });
    }
}

const createPost = async (req, res) =>{
    try {
        const { name, description} = req.body
        const response = await Post.create({name, description})
        res.status(200).json(response)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating post' });    
        
    }
}

const deletePost = async (req, res) =>{
    const { id } = req.params;
    try {
      const post = await Post.findByPk(id);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      await post.destroy();
      res.status(200).json(post);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error deleting post' });
    }

}
const getIndex = (req, res) =>{
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
}
module.exports = {
    getPosts,
    createPost,
    deletePost, getIndex
}