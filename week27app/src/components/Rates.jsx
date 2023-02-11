import React from "react";
import './rates.scss';

function Rates(props) {
    return (
        <div className={`card ${props.selected}`}>
            <h2 className={`card__title ${props.color}`}>{props.rateName}</h2>
            <div className={`card__rate ${props.color}`}>
                <span className="rateValue">руб </span>
                <span className="ratePrice">{props.rate}</span>
                <span className="rateMonth">/мес</span>
            </div>
            <p className="card__speed">до {props.condition} Мбит/сек</p>
            <p className="card__detailes">Объем включенного трафика не ограничен</p>
        </div >
    );
}

export default Rates;