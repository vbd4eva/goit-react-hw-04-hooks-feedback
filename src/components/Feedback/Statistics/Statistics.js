import React from 'react';
import PropTypes from 'prop-types';
import s from "./Statistics.module.css";   

function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
                <div className={s.container}>
                    <div class={s.results}>
                         <p className={s.name}>Good: <span className={s.value}>{good}</span></p>
                         <p className={s.name}>Neutral: <span className={s.value}>{neutral}</span></p>
                         <p className={s.name}>Bad: <span className={s.value}>{bad}</span></p>
                    </div>
                    <p className={s.total}>Total: <span className={s.value}>{total}</span></p>
                    {(!good) || (<p className={s.positivePercentage}>Positive feedback: <span className={s.value}>{positivePercentage}</span>%</p>)}
                </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics

