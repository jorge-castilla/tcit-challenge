const { Router } = require("express")
const router = Router()


const { getPosts, createPost, deletePost, getIndex } = require('../controllers/index.controller')

router.get('/posts', getPosts)
router.post('/posts', createPost)
router.delete('/posts/:id', deletePost)
router.get('/', getIndex)

module.exports = router