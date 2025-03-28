const Button = ({onFakeDark, isFakeDark}) => {
  // const {onFakeDark, isFakeDark} = useContext(PostContext)

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
