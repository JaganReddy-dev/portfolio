const MenuItem = ({ className = "" }) => {
  return (
    <span
      className={`
        block h-0.5 w-7 bg-white
        transition-all duration-300 ease-in-out
        ${className}
      `}
    />
  )
}

export default MenuItem
