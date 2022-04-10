import React from 'react';



function ImagePopup() {
  return (
    <div className="popup popup_type_image-container">
      <div className="popup__container-image">
        <button type="button" className="popup__close"/>
        <img className="popup__image-link" alt="Изображение места"/>
        <h2 className="popup__place-name"/>
      </div>
    </div>
  );
}

export default ImagePopup;