import Navigation from "../Navigation/Navigation";
import { useNavigate } from "react-router-dom";
import hiringImage from "../../images/hire.jpg";

function Header (props) {

  const navigate = useNavigate();

  function handleClickAbout(){
    navigate('/');
  }

  function handleClickJobs(){
    navigate('/jobs');
  }

  return (
    <header className="header">
      <div className="header__content">
        <h2 className="header__info">Vagas</h2>
        <img className="header__logo" src={hiringImage} alt="Logo com placa de conntrata-se"></img>
        <Navigation handleClick={handleClickAbout} text="Sobre"></Navigation>
        <Navigation handleClick={handleClickJobs} text="Encontre sua vaga"></Navigation>
      </div>
    </header>
  )
}

export default Header;