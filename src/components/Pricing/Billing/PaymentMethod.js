import React from 'react'
import BillingStyles from './Billing.module.scss'
const PaymentMethod = () => {
    return (
        <div className={BillingStyles.payment}>
            <div>
                <input type='radio' name='payment' id='paypal' /><span className={BillingStyles['custom-radio']}></span><label htmlFor='paypal'>Paypal</label><span className={BillingStyles.paypal} ></span>
            </div>
            <div>
                <input type='radio' name='payment' id='ccdc' /><span className={BillingStyles['custom-radio']}></span><label htmlFor='ccdc'>Credit/Debit card</label><span className={BillingStyles.visa} ></span><span className={BillingStyles.mastercard}></span>
            </div>
        </div>
    )
}

export default PaymentMethod
