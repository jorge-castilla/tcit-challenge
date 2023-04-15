import {useRef} from 'react'
import {useDispatch} from 'react-redux'
import { filteredPosts } from '../features/posts/postSlice'
function postsFilter() {
  const inputRef = useRef('')
  const dispatch = useDispatch()
  const filterPosts = () =>{
    dispatch(filteredPosts(inputRef.current.value))
  }

  const handleClear = ()=>{
    inputRef.current.value = ''
    dispatch(filteredPosts(inputRef.current.value))
  }
  return (
    <div className="container">
      <input type="text" placeholder="Filtro de Nombre" ref={inputRef} />
      <button className='mr-10' onClick={filterPosts}>Buscar</button>
      <button onClick={handleClear}>Limpiar</button>
    </div>
  )
}

export default postsFilter
