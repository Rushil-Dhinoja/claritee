import React from 'react'
import Input from '../../utils/Input'
import BillingStyles from './Billing.module.scss'
const BillingForm = () => {
    return (
        <div className={BillingStyles.form}>
            <Input label='Card Holder Name' />
            <Input label='Card Number' />
            <div className={BillingStyles.inline}>
                <div>
                <Input  label='Exp (MM/YY)' />

                </div>
                <div>
                <Input  label='CVV' />

                </div>
            </div>
        </div>
    )
}

export default BillingForm
