const Button = ({ setSelected, match }) => {
  const onClick = () => {
    setSelected(match)
  }

  return (
    <button type = "button" onClick = {onClick}>Show</button>
  )
}

export default Button