import React from 'react'
import UtilsStyle from './Utils.module.scss'
const Input = ({label, customWidth}) => {
    return (
        <div className={UtilsStyle['input-group']}>
            <label>{label}</label>
            <input style={customWidth ? {width: customWidth}: {}} type='text' />
        </div>
    )
}

export default Input
