import {useSelector, useDispatch} from 'react-redux'
import { deletePost } from "../features/posts/postSlice"
import { postsService } from "../services/postsService"

function postsList() {

  const dispatch = useDispatch()

  const posts = useSelector(state=>state.posts.posts)

  const handleDelete = (id) => {
    postsService.delete(id).then((post) => {
      dispatch(deletePost(post.id))
    })
  }
  

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post=>(
          <tr key={post.id}>
          <td>{post.name}</td>
          <td>
            {post.description}
          </td>
          <td className='text-center'>
            <button onClick={() => handleDelete(post.id)}>Eliminar</button>
          </td>
        </tr>
        ))}
        
      </tbody>
    </table>
  )
}

export default postsList
