import "./App.css"
import { useSelector, useDispatch } from "react-redux"
import PostsFilter from "./components/PostsFilter"
import PostsList from "./components/PostsList"
import PostsForm from "./components/PostsForm"
import { initPosts } from "./features/posts/postSlice"

import { postsService } from "./services/postsService"
import { useEffect } from "react"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    postsService.getAll().then((posts) => {
      dispatch(initPosts(posts))
    })
  })

  return (
    <div className="app">
      <div className="main-container">
        <PostsFilter></PostsFilter>
        <PostsList></PostsList>
        <PostsForm></PostsForm>
      </div>
    </div>
  )
}

export default App
