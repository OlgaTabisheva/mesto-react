import React from 'react';
import image from "../images/image.jpg";
import {api} from "../utils/Api";
function Main(props) {
  const [userName, setName] = React.useState('');
  const [userDescription , setDescription] = React.useState('');
  const [userAvatar , setAvatar] = React.useState('')
  const [card, setCards] = React.useState([''])

  React.useEffect(() => {
   Promise.all([api.getProfile(),api.getInitialCards()])
     .then(([profile,card])=>{
    setName(profile.name);
    setDescription(profile.about);
    setAvatar(profile.avatar);
    setCards(card)
  },[])
  })


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
      <section className="elements">{card}
      </section>
    </main>
  );
}
export default Main;