function Navigation (props) {
  
  function handleClick() {
    props.handleClick();
  }
  
  return (
    <button className="navigation-button" onClick={handleClick}>{props.text}</button>    
  )
}

export default Navigation;