import React from 'react';



function PopupWithForm(props) {
  return (

    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <button type="button" className="popup__close"/>
        {props.children}
      </div>
    </div>
  );
}

export default PopupWithForm;