import React from 'react'
import UtilsStyle from './Utils.module.scss'

const Select = ({label}) => {
    return (
        <div className={UtilsStyle['select-group']}>
           <label>{label}</label> 
            <select title='select'>
                <option>Select</option>
                <option>Mr.</option>
                <option>Mrs.</option>
                <option>Miss.</option>
            </select>
       </div>
    )
}

export default Select
