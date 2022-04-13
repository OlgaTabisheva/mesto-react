import React from 'react';
import '../index.css';
import Header from './Header';
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditEditPopupOpen, setIsEditEditPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [CardSelected, setsCardSelected] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)

  }

  function handleEditProfileClick() {
    setIsEditEditPopupOpen(true)

  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)

  }

  function handleCardClick(card) {
    setsCardSelected(card)

  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditEditPopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setsCardSelected({})

  }

  return (

    <div className="page">
      <Header/>
      <Main onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}

      />
      <Footer/>
      <PopupWithForm className="Avatar" name='avatar' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
                     buttonText="Coxранить">

        <form name="profileInputForm" className="popup__form" noValidate>
          <h2 className="popup__title">Обновить аватар</h2>
          <input id="avatar" name="input-link" type="url" className="popup__input popup__input_card-link"
                 placeholder="Ссылка на картинку" required/>
          <span id="error-avatar" className="error-message error-message_visible"/>

        </form>
      </PopupWithForm>

      <PopupWithForm className="Edit" name='edit' isOpen={isEditEditPopupOpen} onClose={closeAllPopups}
                     buttonText="Coxранить">
        <form id="form__input" name="profileInputForm" className="popup__form" noValidate>
          <h2 className="popup__title">Редактировать профиль</h2>
          <input placeholder="Введите имя пользователя" id="name" name="input-name" type="text"
                 className="popup__input popup__input_type_name" minLength={2} maxLength={40} required/>
          <span id="error-name" className="error-message error-message_visible"/>
          <input placeholder="Введите профессию" id="job" name="input-job" type="text"
                 className="popup__input popup__input_type_job" minLength={2} maxLength={200} required/>
          <span id="error-job" className="error-message error-message_visible"/>
        </form>

      </PopupWithForm>
      <PopupWithForm className="Add-card" name='add-card' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
                     buttonText="Coздать">
        <form name="placeInputForm" className="popup__form" noValidate>
          <h2 className="popup__title">Новое место</h2>
          <input id="place" name="input-place" type="text" className="popup__input popup__input_type_card-name"
                 minLength={2} maxLength={30} placeholder="Название" required/>
          <span id="error-place" className="error-message error-message_visible"/>
          <input id="link" name="input-link" type="url" className="popup__input popup__input_card-link"
                 placeholder="Ссылка на картинку" required/>
          <span id="error-link" className="error-message error-message_visible"/>
        </form>

      </PopupWithForm>
      <ImagePopup card={CardSelected} onClose={closeAllPopups}></ImagePopup>


    </div>

  );
}

export default App;


