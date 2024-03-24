import Preloader from "../Preloader/Preloader";

function Main (props) {
  return (
    <div className="main">
      <h3>Encontre sua vaga</h3>
      <Preloader isOpen={false}></Preloader>
    </div>
  )
}

export default Main;