import React from 'react';
import './card.css';

export default function Planets({ planets }) {
  return (
    <div className="card__container">
      {planets.map((planet, ndx) => {
        return (
          <div key={ndx} className="card__main">
            <p>Name: <span>{planet.name}</span></p>
            <p>Population: <span>{planet.population}</span></p>
            <p>Terrain: <span>{planet.terrain}</span></p>
          </div>
        );
      })}
    </div>
  );
}
