import React from 'react'
import Billing from './Billing/Billing'
import PricingStyles from './Pricing.module.scss'
import SignUp from './Signup/SignUp'
const Pricing = () => {
    return (
        <div className={PricingStyles.pricing} > 
            <h1>Your Plan</h1>
            <main className={PricingStyles.main}>
                <div className={PricingStyles.container}>
                    <SignUp/>
                    <Billing />
                </div>
            </main>
 
        </div>
    )
}

export default Pricing
