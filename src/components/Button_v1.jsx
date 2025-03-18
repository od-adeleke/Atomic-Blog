import {useContext} from 'react'

import {PostContext} from '../App'

const Button = () => {
  const {onFakeDark, isFakeDark} = useContext(PostContext)

  return (
    <button
      onClick={() => onFakeDark()}
      className="btn-fake-dark-mode"
    >
      {isFakeDark ? "☀️" : "🌙"}
    </button>
  )
}

export default Button
