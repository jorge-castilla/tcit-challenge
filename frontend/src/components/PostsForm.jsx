import { useState, useRef } from "react"
import { useDispatch } from "react-redux"
import { addPost } from "../features/posts/postSlice"
import { postsService } from "../services/postsService"

function postsForm() {
  const nameInputRef = useRef('')
  const descriptionInputRef = useRef('')
  const dispatch = useDispatch()

  const [post, setPost] = useState({
    name: "",
    description: "",
  })

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postsService.store(post).then((post) => {
      dispatch(addPost(post))
      nameInputRef.current.value = ''
      descriptionInputRef.current.value = ''
    })
    
  }
  return (
    <form className="container">
      <input
        name="name"
        type="text"
        placeholder="Nombre"
        ref={nameInputRef}
        onChange={handleChange}
      />
      <input
        name="description"
        type="text"
        placeholder="Descripción"
        className="description-input"
        ref={descriptionInputRef}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Crear</button>
    </form>
  )
}

export default postsForm
