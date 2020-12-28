import PropTypes from 'prop-types'
import s from './FeedbackOptions.module.css'

function FeedbackOptions({ options, onLeaveFeedback }) {
    
    return (
        <div>
            {options.map(btnAtrName => (
                <button className={s.btn} key={btnAtrName} name={btnAtrName} onClick={onLeaveFeedback}>{btnAtrName}</button>
            ))}
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions

