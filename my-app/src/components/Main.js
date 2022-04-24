import React from 'react';
import {api} from "../utils/Api";
import Card from "./Card";
import {currentUserContext} from "../context/CurrentUserContext";


function Main(props) {




  const currentUser =React.useContext(currentUserContext)
  /*const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('')*/
  const [cards, setCards] = React.useState([])
React.useEffect(() => {
    Promise.all([ api.getInitialCards()])
      .then(([ cards]) => {
        setCards(cards);

      }).catch(console.log)
  }, [])

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card){
    api.deleteCard(card._id).then(()=>{
    setCards(cards.filter(deleteCard => deleteCard._id !== card._id))
    })

  }

  return (


    <main className="content">
      <section className="profile">
        <div className="profile__card">
          <div className="avatar">
            <button onClick={props.onEditAvatar} type="button" className="profile__avatar-button"><img src={currentUser.avatar}
                                                                                                       alt="Изображение логотипа в шапке"
                                                                                                       className="profile__avatar"/>
            </button>
          </div>
          <div className="profile__edit-info">
            <div className="profile__info">
              <h1 className="profile__name">{currentUser.name}</h1>
              <p className="profile__job">{currentUser.about}</p>
            </div>
            <button onClick={props.onEditProfile} type="button" className="profile__edit-button"/>
          </div>
        </div>
        <button onClick={props.onAddPlace} aria-label="Кнопка добавления" type="button"
                className="profile__add-button"/>
      </section>


      {<section className="elements">
        {cards.map((element) => (
          <Card card={element} onCardDelete={handleCardDelete} onCardLike={handleCardLike} onCardClick={props.onCardClick} key={element._id}></Card>
        ))}
      </section>}
    </main>

  );
}

export default Main;




