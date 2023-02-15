import React, { useState } from "react";
import style from "./style.module.scss";

function Rates(props) {
    const [isSelected, setSelected] = useState(false);

    const handleChange = () => {
        setSelected(!isSelected);
    }

    return (
        <div className={`${style.card} ${style[isSelected ? 'selected' : '']}`}>
            <h2 className={`${style.card__title} ${style[props.color]}`}>{props.rateName}</h2>
            <div className={`${style.card__rate} ${style[props.color]}`}>
                <span className={style.rateValue}>руб </span>
                <span className={style.ratePrice}>{props.rate}</span>
                <span className={style.rateMonth}>/мес</span>
            </div>
            <p className={style.card__speed}>до {props.condition} Мбит/сек</p>
            <p className={style.card__detailes}>Объем включенного трафика не ограничен</p>
            <button className={`${style[isSelected ? 'btn_selected' : 'btn_not-selected']}`} onClick={handleChange}>
                {isSelected ? 'Выбрано!' : 'Выбрать'}
            </button>
        </div>
    );
}

export default Rates;