// import {useContext} from 'react'
// import {PostContext} from '../App'
import {usePosts} from '../PostProvider'

import Results from './Results'
import SearchPosts from './SearchPosts'


const Header = () => {
  // const {onClearPosts} = useContext(PostContext)
    const {onClearPosts} = usePosts()

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

export default Header
