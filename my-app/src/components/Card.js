import React from 'react';
import App from "./App";


function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div key={props.card._id}>
      <article className="element">
        <button className="element__delete-button"></button>
        <button className="element__view-button" onClick={handleClick}>
          <img src={props.card.link} className="element__image" alt="Карточка с изображением места"/>
        </button>
        <div className="element__group">
          <h2 className="element__group-title">{props.card.name}</h2>
          <div className="buttons">
            <button type="button" className="element__group-heart"></button>
            <span type="button" className="element__like-count">{props.card.likes.length}</span>
          </div>
        </div>
      </article>
    </div>

  );
}

export default Card;