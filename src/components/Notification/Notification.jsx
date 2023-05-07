import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ message }) => <p className={css.title}>{message}</p>;

Notification.prototype = {
    message: PropTypes.string.isRequired,
}