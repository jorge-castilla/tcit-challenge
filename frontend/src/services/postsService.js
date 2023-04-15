import axios from "axios"
export  const postsService = {
  getAll: async () => {
    const response = await axios.get("http://localhost:3000/posts")
    return response.data
  },
  store: async (post) => {
    const params = {
        name: post.name,
        description: post.description,
    }
    const response = await axios.post("http://localhost:3000/posts", params)
    return response.data
  },
  delete: async (id) =>{
    const response = await axios.delete(`http://localhost:3000/posts/${id}`)
    return response.data
  }
}
