import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../Header/Header'
import MainBanner from '../MainBanner/MainBanner'
import Features from '../Features/Features'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import Banner2 from '../Banner2/Banner2'
import NewArrivals from '../NewArrivals/NewArrivals'
import Banner3 from '../Banner3/Banner3'
import Banner4 from '../Banner4/Banner4'
import Newsletter from '../Newsletter/Newsletter'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <>
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      <Header></Header>
      <main>
        <MainBanner></MainBanner>
        <Features></Features>
        <FeaturedProducts></FeaturedProducts>
        <Banner2></Banner2>
        <NewArrivals></NewArrivals>
        <Banner3></Banner3>
        <Banner4></Banner4>
        <Newsletter></Newsletter>
        <Footer></Footer>
      </main>
    </>
  )
}

export default Home