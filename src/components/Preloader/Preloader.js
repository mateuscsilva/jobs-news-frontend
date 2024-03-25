function Preloader (props) {
  return(
    <div className="loader-box">
    < div className={`loader ${props.isOpen ? 'loader-open': ''}`}></div>
    </div>
  );
}

export default Preloader;