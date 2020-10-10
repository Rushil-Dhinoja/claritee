import React from 'react'
import Input from '../../utils/Input'
import Select from '../../utils/Select'
import SignupStyles from './Signup.module.scss'
import arrow from '../../../assets/arrow-right.svg'

const SignUp = () => {
    return (
        <div className={SignupStyles.signup}>
            <h2>Sign Up</h2>
            <Input label='Name' />
            <Select label='Title'/>
            <Input label='E-mail' />
            <Input label='Password' />
            <p>
                <span className={SignupStyles.text}>Add Invoice Information</span>
                <img className={SignupStyles.image} src={arrow} alt='Arrow' />
            </p>
        </div>
    )
}

export default SignUp
