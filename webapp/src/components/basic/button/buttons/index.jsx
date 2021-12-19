import classNames from 'classnames'

import './style.scss'

const Buttons = props => {
    
    const {
        outline,
        small,
        smallOutline,
        primary,
        white,
        royalBlue,
        onClick,
    } = props;

    return (
        <button className={classNames({
            'btn': true,
            'btn-sm': small || smallOutline,
            'btn-outline': outline || smallOutline,
            'btn-primary': primary,
            'btn-white': white,
            'btn-royal-blue': royalBlue 
        })} onClick={onClick}>{props.children}</button>
    )
}

export default Buttons