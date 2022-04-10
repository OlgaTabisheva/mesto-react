import React from 'react';
import image from "../images/image.jpg";
import {api} from "../utils/Api";
function Main(props) {


  const [userName, setName] = React.useState('');
  const [userDescription , setDescription] = React.useState('');
  const [userAvatar , setAvatar] = React.useState('')
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
   Promise.all([api.getProfile(),api.getInitialCards()])
     .then(([profile,cards])=>{
    setName(profile.name);
    setDescription(profile.about);
    setAvatar(profile.avatar);
    setCards(cards);

  })
  },[])


  return (


    <main className="content">
      <section className="profile">
        <div className="profile__card">
          <div className="avatar">
            <button onClick={props.onEditAvatar} type="button" className="profile__avatar-button"><img src={userAvatar} alt="Изображение логотипа в шапке" className="profile__avatar" /></button>
          </div>
          <div className="profile__edit-info">
            <div className="profile__info">
              <h1 className="profile__name">{userName}</h1>
              <p className="profile__job">{userDescription}</p>
            </div>
            <button  onClick={props.onEditProfile}  type="button" className="profile__edit-button" />
          </div>
        </div>
        <button onClick={props.onAddPlace} aria-label="Кнопка добавления" type="button" className="profile__add-button" />
      </section>


     {<section className="elements">
        {cards.map((card, i) => (
          // Важный атрибут: key
          <div key={card._id}>
            <article className="element">
            <button className="element__delete-button"></button>
            <button className="element__view-button">
              <img src={card.link} className="element__image" alt="Карточка с изображением места"/>
            </button>
            <div className="element__group">
              <h2 className="element__group-title">{card.name}</h2>
              <div className="buttons">
                <button type="button" className="element__group-heart"></button>
                <span type="button" className="element__like-count"></span>
              </div>
            </div>
            </article>
          </div>
        ))}
      </section>}
    </main>


  );
}
export default Main;




