import React from 'react';
import './card.css';

export default function People({ people }) {
  return (
    <div className="card__container">
      {people.map((people, ndx) => {
        return (
          <div key={ndx} className="card__main">
            <p>Name: <span>{people.name}</span></p>
            <p>Gender: <span>{people.gender}</span></p>
            <p>Height: <span>{people.height} cm</span></p>
          </div>
        )
      })}
    </div>
  )
}