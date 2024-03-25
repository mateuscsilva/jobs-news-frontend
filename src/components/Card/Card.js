import { useState } from "react";

function Card (props) {

  const [unwrapButton, setUnwrapButton] = useState(props.unwrap);

  function handleUnwrapButton() {
    setUnwrapButton(!unwrapButton);
  }

  return(
    <div className="card__item">
      <div className="card__info">
        <h2 className="card__title">{props.title}</h2>
        <h3 className="card__level">{props.level.short_name}</h3>
      </div>
      <h3 className="card__company">{props.company}</h3>
      <div className={`card__description ${!unwrapButton ? 'card__description-small' : ''}`} dangerouslySetInnerHTML={{__html: props.description }}></div>
      <button className="card__unwrap" onClick={handleUnwrapButton}>{unwrapButton ? 'Minimizar' : 'Expandir'}</button>
    </div>
  )
}

export default Card;