import PropTypes from 'prop-types'

const Notification = ({ message }) => {
    return (
        <p>
            {message}
        </p>
    )
}

export default Notification;

Notification.propType = {
    message: PropTypes.string.isRequired
}