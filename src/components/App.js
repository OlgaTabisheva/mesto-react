import React from 'react';
import '../index.css';
import Header from './Header';
import Footer from "./Footer";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import {currentUserContext} from "../context/CurrentUserContext";
import {api} from "../utils/Api";
import EditProfilePopup from "./EditProfilePopup"
import EditAvatarPopup from "./EditAvatarPopup"
import AddPlacePopup from "./AddPlacePopup";

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditEditPopupOpen, setIsEditEditPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [CardSelected, setsCardSelected] = React.useState({});
  const [currentUser, setСurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    Promise.all([api.getProfile(), api.getInitialCards()])
      .then(([profile, cards]) => {
        setСurrentUser(profile);
        setCards(cards);
      }).catch(console.log)
  }, [])

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    }).catch(console.log)
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setCards((prevState) => {
      return prevState.filter(deleteCard => deleteCard._id !== card._id)})
    }).catch(console.log)
  }

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

  function handleUpdateUser(newInfo) {
    api.editProfile(newInfo.name, newInfo.about).then((newUserInfo) => {
      setСurrentUser(newUserInfo)
      closeAllPopups()
    }).catch(console.log)
  }

  function handleUpdateAvatar(avatar) {
    api.editAvatar(avatar).then((newUserInfo) => {
      setСurrentUser(newUserInfo)
      closeAllPopups()
    }).catch(console.log)
  }

  function handleAddPlaceSubmit(newInfo) {
    api.addCard(newInfo.name, newInfo.link).then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups()
    }).catch(console.log)
  }

  return (
    <currentUserContext.Provider value={currentUser}>

      <div className="page">
        <Header/>
        <Main onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
              cards={cards}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}

        />
        <Footer/>

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateAvatar}/>

        <EditProfilePopup isOpen={isEditEditPopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>

        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onUpdateUser={handleAddPlaceSubmit}/>

        <ImagePopup card={CardSelected} onClose={closeAllPopups}></ImagePopup>

      </div>

    </currentUserContext.Provider>
  );
}

export default App;


