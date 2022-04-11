import React from 'react';
import ReactDOM from 'react-dom'
import '../index.css';
import image from '../images/image.jpg';
import Header from './Header';
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import Card from "./Card";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, AvatarPopupOpen] = React.useState(false);
  const [isEditEditPopupOpen, EditPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, AddPopupOpen] = React.useState(false);
  const [isCardSelected, selectedCard] = React.useState({});

  function handleEditAvatarClick() {
    {
      AvatarPopupOpen(true)
    }

  }

  function handleEditProfileClick() {
    {
      EditPopupOpen(true)
    }

  }

  function handleAddPlaceClick() {
    {
      AddPopupOpen(true)
    }
  }

    function handleCardClick(card){
      {

      selectedCard(card)
    }


  }
  function closeAllPopups() {
    {
      AvatarPopupOpen(false)
      EditPopupOpen(false)
      AddPopupOpen(false)
      selectedCard({})
    }

  }

  return (
    <div>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Mesto</title>
      <div>
        <div className="page">
          <Header/>
          <Main onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick ={handleCardClick}

          />
          <Footer/>
        </div>
      </div>


      <PopupWithForm className="Avatar" name='avatar' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>

        <form name="profileInputForm" className="popup__form" noValidate>
          <h2 className="popup__title">Обновить аватар</h2>
          <input id="avatar" name="input-link" type="url" className="popup__input popup__input_card-link"
                 placeholder="Ссылка на картинку" required/>
          <span id="error-avatar" className="error-message error-message_visible"/>
          <button className="popup__button-save" type="submit">Сохранить</button>
        </form>
      </PopupWithForm>

      <PopupWithForm className="Edit" name='edit' isOpen={isEditEditPopupOpen} onClose={closeAllPopups}>
        <form id="form__input" name="profileInputForm" className="popup__form" noValidate>
          <h2 className="popup__title">Редактировать профиль</h2>
          <input placeholder="Введите имя пользователя" id="name" name="input-name" type="text"
                 className="popup__input popup__input_type_name" minLength={2} maxLength={40} required/>
          <span id="error-name" className="error-message error-message_visible"/>
          <input placeholder="Введите профессию" id="job" name="input-job" type="text"
                 className="popup__input popup__input_type_job" minLength={2} maxLength={200} required/>
          <span id="error-job" className="error-message error-message_visible"/>
          <button className="popup__button-save" type="submit">Сохранить</button>
        </form>

      </PopupWithForm>
      <PopupWithForm className="Add-card" name='add-card' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <form name="placeInputForm" className="popup__form" noValidate>
          <h2 className="popup__title">Новое место</h2>
          <input id="place" name="input-place" type="text" className="popup__input popup__input_type_card-name"
                 minLength={2} maxLength={30} placeholder="Название" required/>
          <span id="error-place" className="error-message error-message_visible"/>
          <input id="link" name="input-link" type="url" className="popup__input popup__input_card-link"
                 placeholder="Ссылка на картинку" required/>
          <span id="error-link" className="error-message error-message_visible"/>
          <button className="popup__button-save" type="submit">Создать</button>
        </form>

      </PopupWithForm>
      <ImagePopup card={isCardSelected} onClose={closeAllPopups}></ImagePopup>

      <div className="popup popup_type_edit">

        <div className="popup__container">
          <button type="button" className="popup__close"/>

        </div>
      </div>
      <div className="popup popup_type_add-card">
        <div className="popup__container">
          <button type="button" className="popup__close"/>

        </div>
      </div>
      <div className="popup popup_type_delete-card">
        <div className="popup__container">
          <button type="button" className="popup__close"/>
          <form name="placeInputForm" className="popup__form" noValidate>
            <h2 className="popup__title">Вы уверены?</h2>
            <button className="popup__button-save" type="submit">ДА</button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_image-container">
        <div className="popup__container-image">
          <button type="button" className="popup__close"/>
          <img className="popup__image-link" alt="Изображение места"/>
          <h2 className="popup__place-name"/>
        </div>
      </div>



    </div>

  );
}
export default App;


/*
<div className="popup popup_type_avatar">
  <div className="popup__container">
    <button type="button" className="popup__close"/>
    <form name="profileInputForm" className="popup__form" noValidate>
      <h2 className="popup__title">Обновить аватар</h2>
      <input id="avatar" name="input-link" type="url" className="popup__input popup__input_card-link"
             placeholder="Ссылка на картинку" required/>
      <span id="error-avatar" className="error-message error-message_visible"/>
      <button className="popup__button-save" type="submit">Сохранить</button>
    </form>
  </div>
</div>*/
/*
function  handleEditProfileClick(){
  {
    console.log('ghb')
    const pop = document.querySelector('.popup_type_edit')
    pop.classList.add('popup_opened');
  }

}}
{function  handleAddPlaceClick(){
          {
            console.log('ghb')
            const pop = document.querySelector('.popup_type_add-card')
            pop.classList.add('popup_opened');
          }

        }}

*/
