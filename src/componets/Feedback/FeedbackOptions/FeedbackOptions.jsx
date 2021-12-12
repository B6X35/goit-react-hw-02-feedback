import PropTypes from 'prop-types'
import style from './FeedbackOptions.module.css'

const FeedbackOptions = ({options, onClick}) => {
    const elements = Object.keys(options).map(option => 
    <button 
    key={option} 
    onClick={() => onClick(option)}
    className={style.btn}
    >
    {option}
    </button>);

    return (
        <div>
            {elements}
        </div>
    )
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    onClick: PropTypes.func.isRequired,
} 