import React from 'react'
import BillingStyles from './Billing.module.scss'
import BillingForm from './BillingForm'
import PaymentMethod from './PaymentMethod'
const Billing = () => {
    return (
        <div className={BillingStyles.billing}>
            <h2>Unlimited</h2>
            <h3>$10<span>/month</span></h3>
            <PaymentMethod />
            <BillingForm />
            <div className={BillingStyles.total} >
                <p>Total/month</p>
                <p>$10</p>
            </div>
            <div className={BillingStyles.cta}>Subscribe</div>
            <div className={BillingStyles.info} >
                <p>Transactions are encrypted and secured</p>
                <p>By registering you are agreeing to the <span>Terms of Use</span> and <span>Privacy Policy</span></p>
            </div>
        </div>
    )
}

export default Billing
