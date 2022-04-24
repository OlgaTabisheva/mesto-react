import React from 'react';
import '../index.css';
import Header from './Header';
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {currentUserContext} from "../context/CurrentUserContext";
//import {cardsContext} from "../context/CardsContext";
import {api} from "../utils/Api";
import EditProfilePopup from "../components/EditProfilePopup"
import EditAvatarPopup from "../components/EditAvatarPopup"

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditEditPopupOpen, setIsEditEditPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [CardSelected, setsCardSelected] = React.useState({});
  const [currentUser, setСurrentUser ] = React.useState({});

  React.useEffect(() => {
    Promise.all([api.getProfile()])
      .then(([profile]) => {
        setСurrentUser(profile);
      }).catch(console.log)
  }, [])




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

  function  handleUpdateUser(newInfo){
    api.editProfile(newInfo.name,newInfo.about).then((newUserInfo)=>{
      setСurrentUser(newUserInfo)
      closeAllPopups()
    })
  }

  function handleUpdateAvatar(avatar){
    api.editAvatar(avatar).then((newUserInfo)=>{
      setСurrentUser(newUserInfo)
      closeAllPopups()
  })
  }

  return (
    <currentUserContext.Provider value={currentUser}>

    <div className="page">
      <Header/>
      <Main onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}

      />
      <Footer/>
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateUser ={handleUpdateAvatar}/>

      <EditProfilePopup isOpen={isEditEditPopupOpen} onClose={closeAllPopups} onUpdateUser ={handleUpdateUser}/>

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

    </currentUserContext.Provider>
  );

}

export default App;


