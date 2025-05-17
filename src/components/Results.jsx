// import {useContext} from 'react'
// import {PostContext} from '../App'
import {usePosts} from '../PostProvider-memo'

const Results = () => {
  const { posts } = usePosts()
  return (
    <p>🚀 {posts.length} atomic posts found</p>
  )
}

export default Results
