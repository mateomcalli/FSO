const S_Notification = ({ message }) => {
  if (message === null) {
    return null
  } 

  return (
    <div className = "success">
      {message}
    </div>
  )
}

export default S_Notification