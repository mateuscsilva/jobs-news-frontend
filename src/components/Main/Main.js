import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import Card from "../Card/Card";
import api from '../../utils/api';

function Main (props) {

  const [isOpenPreloader, setIsOpenPreloader] = useState(true);

  const [cards, setCards] = useState({
    page: 1,
    lastPage: 1,
    cardsArray: []
  })

  const [disableButtons, setDisableButtons] = useState({
    nextButton: false,
    previousButton: true
  })

  function handleFetchCardsData(data){
    setCards({
      page: data.page,
      lastPage: data.page_count,
      cardsArray: data.results
    })
  }

  function verifyButtons(page){
    setDisableButtons({
      nextButton: page < cards.lastPage ? false : true,
      previousButton: page > 1 ? false : true
    });
  }

  function handlePreviousPage(){
    setIsOpenPreloader(true);  
    const newPage = cards.page-1;
    api.getJobs(newPage).then((res) => {
      setIsOpenPreloader(false); 
      handleFetchCardsData(res);
      verifyButtons(newPage);
    })
  }

  function handleNextPage(){
    setIsOpenPreloader(true);  
    const newPage = cards.page+1;
    api.getJobs(newPage).then((res) => {
      setIsOpenPreloader(false); 
      handleFetchCardsData(res);
      verifyButtons(newPage);
    })
  }

  useEffect(() => {
    api.getJobs(1).then((res) => {
      setIsOpenPreloader(false); 
      handleFetchCardsData(res)
    })
  }, []);

  return (
    <div className="main">
      <h3 className="main__title">Encontre sua vaga</h3>  
      <Preloader isOpen={isOpenPreloader}></Preloader>
      <section className={`cards ${isOpenPreloader ? 'cards-closed': ''}`}>

        {cards.cardsArray.map((card, i)=>{
            return <Card key={card.id} title={card.name} company={card.company.name} description={card.contents} unwrap={false} level={card.levels[0]}></Card>
        })}

        <div className="cards__buttons">
          <button className={`cards__buttons-page ${disableButtons.previousButton ? 'cards__buttons-disabled' : ''}`} onClick={handlePreviousPage} disabled={disableButtons.previousButton}>Página Anterior</button> 
          <button className={`cards__buttons-page ${disableButtons.nextButton ? 'cards__buttons-disabled' : ''}`} onClick={handleNextPage} disabled={disableButtons.nextButton}>Próxima Página</button> 
        </div>
      </section>
    </div>
  )
}

export default Main;