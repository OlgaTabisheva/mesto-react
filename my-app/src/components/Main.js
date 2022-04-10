import React from 'react';
import image from "../images/image.jpg";


function Main(props) {


  return (


    <main className="content">
      <section className="profile">
        <div className="profile__card">
          <div className="avatar">
            <button onClick={props.onEditAvatar} type="button" className="profile__avatar-button"><img src={image} alt="Изображение логотипа в шапке" className="profile__avatar" /></button>
          </div>
          <div className="profile__edit-info">
            <div className="profile__info">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <p className="profile__job">Исследователь океана</p>
            </div>
            <button  onClick={function  handleEditProfileClick(){
              {
                console.log('ghb')
                const pop = document.querySelector('.popup_type_edit')
                pop.classList.add('popup_opened');
              }

            }}  type="button" className="profile__edit-button" />
          </div>
        </div>
        <button onClick={function  handleAddPlaceClick(){
          {
            console.log('ghb')
            const pop = document.querySelector('.popup_type_add-card')
            pop.classList.add('popup_opened');
          }

        }} aria-label="Кнопка добавления" type="button" className="profile__add-button" />
      </section>
      <section className="elements">
      </section>
    </main>
  );
}
export default Main;