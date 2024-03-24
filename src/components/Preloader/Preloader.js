function Preloader (props) {
  return(
    <div className={`loader ${props.isOpen ? 'loader-open': ''}`}></div>
  );
}

export default Preloader;