import React from 'react'
import OfferBanner from  '../../components/OfferDeals/OfferBanner/OfferBanner'
import OfferCoupons from './OfferCoupons/OfferCoupons'
const OfferDeals = () => {
  return (
    <>
        <section className="theme-bg-white py-5">
                <div className="container">
                    <OfferBanner/>
                    <OfferCoupons/>
                    </div>
               
            </section>
    </>
  )
}

export default OfferDeals