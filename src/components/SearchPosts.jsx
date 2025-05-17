// import {useContext} from 'react'
// import {PostContext} from '../App'
import {usePosts} from '../PostProvider-memo'

const SearchPosts = () => {
  const {searchQuery, setSearchQuery} = usePosts()
  
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  )
}

export default SearchPosts
