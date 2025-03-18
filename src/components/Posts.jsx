import {useContext} from 'react'
import {PostContext} from '../App'

import List  from './List'

const Posts = () => {
  const {posts} = useContext(PostContext)
  return (
    <section>
      <List posts={posts} />
    </section>
  )
}

export default Posts
