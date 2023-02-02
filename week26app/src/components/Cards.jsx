import React from "react";

function Cards(props) {
    return (
        <div className="card">
            <div className="card__body">
                <h2 className="card__title">{props.name}</h2>
                <img className="card__img" src={props.imgsrc} />
                <div className="card__paragraph">
                    <p className="card__subtitle">Альтер Эго: </p>
                    <p className="card__text">{props.alterego}</p>
                </div>
                <div className="card__paragraph">
                    <p className="card__subtitle">Город: </p>
                    <p className="card__text">{props.city}</p>
                </div>
                <div className="card__paragraph">
                    <p className="card__subtitle">Друзья: </p>
                    <p className="card__text">{props.group}</p>
                </div>
                <div className="card__paragraph">
                    <p className="card__subtitle">Суперсилы: </p>
                    <p className="card__text">{props.superpower}</p>
                </div>
            </div>
        </div>
    );
}

export default Cards;