import { createSlice } from "@reduxjs/toolkit"
import { postsService } from "../../services/postsService"

const initialState = { posts: [], postsContainer: [] }

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload)
      state.postsContainer.push(action.payload)
    },
    initPosts: (state, action) => {
      action.payload.map((post) => {
        state.posts.push(post)
        state.postsContainer.push(post) 
      })
    },
    deletePost: (state, action) => {
      const postFound = state.posts.find((post) => post.id === action.payload)
      if (postFound) {
        state.posts.splice(state.posts.indexOf(postFound), 1)
      }
    },
    filteredPosts: (state, action) => {
      state.posts = state.postsContainer.filter((post) =>
        post.name.toLowerCase().includes(action.payload)
      )
    },
  },
})

export const { addPost, initPosts, deletePost, filteredPosts } =
  postSlice.actions

export default postSlice.reducer
