import React from 'react';


function ImagePopup({card, onClose}) {
  return (
    <div className={`popup popup_type_image-container ${card._id ? 'popup_opened' : ''}`}>
      <div className="popup__container-image">
        <button type="button" className="popup__close" onClick={onClose}/>
        <img className="popup__image-link" alt="Изображение места" src={card.link}/>
        <h2 className="popup__place-name"/>
      </div>
    </div>
  );
}

export default ImagePopup;