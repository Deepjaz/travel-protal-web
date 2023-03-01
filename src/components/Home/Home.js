import React from 'react'
import Header from '../Header/Header'
import '../../assets/css/main.css'
import FlightSearch from '../FlightSearch.js/FlightSearch'
import TravelDeal from '../TravelDeal/TravelDeal'
import FlightDeals from '../FlightDeals/FlightDeals'
import TopDestinations from '../TopDestinations/TopDestinations'
import Working from '../Working/Working'
import UniqueExperiences from '../UniqueExperiences/UniqueExperiences'
import Footer from '../Footer/Footer'
import '../../assets/css/aos.css';
import '../../assets/css/bootstrap-icons.css';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/jquery-ui.css';
import '../../assets/css/owl.carousel.min.css';
import '../../assets/css/owl.theme.default.min.css';
import '../../assets/css/seats.css';
import articles08 from '../../assets/images/unique-ex/articles08.png'
import articles07 from '../../assets/images/unique-ex/articles07.png'
import articles06 from '../../assets/images/unique-ex/articles06.png'
import articles05 from '../../assets/images/unique-ex/articles05.png'
import articles04 from '../../assets/images/unique-ex/articles04.png'
import articles03 from '../../assets/images/unique-ex/articles03.png'
import articles02 from '../../assets/images/unique-ex/articles02.png'
import SixE from './../../assets/images/icons/6E.jpg';
import Deals01 from '../../assets/images/featured-flights-deals/Deals01.png'
import Deals02 from '../../assets/images/featured-flights-deals/deals02.png'
import thaiAir from '../../assets/images/icons/thaiAir.jpg'
import Deals03 from '../../assets/images/featured-flights-deals/deals03.png'
import vistara from '../../assets/images/icons/vistara.jpg'
import Deals04 from '../../assets/images/featured-flights-deals/deals04.png'
import spicejet from '../../assets/images/icons/spicejet.jpg'
import airasia from '../../assets/images/icons/airasia.jpg'
import destination01 from '../../assets/images/destination/destination01.png'
import destination02 from '../../assets/images/destination/destination02.png'
import destination03 from '../../assets/images/destination/destination03.png'
import destination04 from '../../assets/images/destination/destination04.png'
import destination05 from '../../assets/images/destination/destination05.png'
import destination06 from '../../assets/images/destination/destination06.png'
import destination07 from '../../assets/images/destination/destination07.png'
import destination08 from '../../assets/images/destination/destination08.png'
import destination09 from '../../assets/images/destination/destination09.png'


const Home = () => {
    const travelDeals = Array.from({ length: 9 }, (_, index) => index);
    const travelDealsList = travelDeals.map((deal) => <TravelDeal key={deal} />);

    const flightDeals = Array.from({ length: 4 }, (_, index) => index);
    const flightDealsList = flightDeals.map((deal) => <FlightDeals key={deal} />);

    const topDestination = Array.from({ length: 9 }, (_, index) => index);
    const topDestinationList = topDestination.map((deal) => <TopDestinations key={deal} />);

    const working = Array.from({ length: 3 }, (_, index) => index);
    const workingList = working.map((deal) => <Working key={deal} />);

    // const uniqueExp = Array.from({ length: 3 }, (_, index) => index);
    // const uniqueExpList = uniqueExp.map((deal) => <UniqueExperiences key={deal} />);


    return (
        <>

            <div className="pagewrap" id="default-page">
                <div className="head-wrapper">
                    <Header />
                    <section className="py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 mt-5">
                                    <h2 className="h4 text-center text-white mb-4">
                                        The best tour experience
                                    </h2>
                                    <h1 className="h1 text-center theme-text-white fw-bold theme-text-shadow mb-4">
                                        Find and book best{" "}
                                        <span className="theme-text-primary" id="changingword" style={{}}>
                                            Seats
                                        </span>
                                    </h1>
                                    <p className="font-small text-white text-center px-5 max-1">
                                        Curabitur nunc erat, consequat in erat ut, congue bibendum nulla.
                                        Suspendisse id pharetra lacus, et hendrerit mi quis leo elementum.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <FlightSearch />
                    <div className="content-section">
                        {/* Travel deals & more start */}
                        {/* <section className="travel-deal py-5 border-top" id="travelDeals">
                            <div className="container">
                                <div className="row my-5" data-aos="fade-up">
                                    <div className="col-12">
                                        <h3 className="h3 text-center theme-text-secondary fw-bold mb-3">
                                            Amazing travel deals &amp; More
                                        </h3>
                                        <p className="text-center theme-text-accent-two mb-0">
                                            Explore the best of travel with our exclusive deals for{" "}
                                        </p>
                                    </div>

                                </div>
                                <div className="row" data-aos="fade-down">
                                    <div className="travel-deals-container">{travelDealsList}</div>

                                </div>
                            </div>
                        </section> */}
                        <section className="travel-deal py-5 border-top" id="travelDeals">
                            <div className="container">
                                <div className="row my-5 aos-init aos-animate" data-aos="fade-up">
                                    <div className="col-12">
                                        <h3 className="h3 text-center theme-text-secondary fw-bold mb-3">Amazing travel deals &amp; More
                                        </h3>
                                        <p className="text-center theme-text-accent-two mb-0">Explore the best of travel with our
                                            exclusive deals for </p>
                                    </div>
                                </div>
                                <div className="row aos-init aos-animate" data-aos="fade-down">
                                    {/* {travelDealsList} */}
                                    <TravelDeal
                                        img={SixE}
                                    />
                                    <TravelDeal
                                        img={SixE}
                                    />
                                    <TravelDeal
                                        img={SixE}
                                    />
                                    <TravelDeal
                                        img={SixE}
                                    />
                                    <TravelDeal
                                        img={SixE}
                                    />
                                    <TravelDeal
                                        img={SixE}
                                    />
                                    <TravelDeal
                                        img={SixE}
                                    />
                                    <TravelDeal
                                        img={SixE}
                                    />
                                    <TravelDeal
                                        img={SixE}
                                    />

                                </div>
                            </div>
                        </section>



                        <section className="featured-deal border-top py-5" id="featuredFlights">
                            <div className="container">
                                <div className="row my-5 aos-init aos-animate" data-aos="fade-up">
                                    <div className="col-12">
                                        <h4 className="h3 text-center theme-text-secondary fw-bold mb-3">
                                            Featured Flights Deals
                                        </h4>
                                        <p className="text-center theme-text-accent-two mb-0">
                                            Everything You Want &amp; More
                                        </p>
                                    </div>
                                </div>

                                <div class="row aos-init aos-animate" data-aos="fade-down">

                                    <FlightDeals
                                        img={Deals01}
                                        img1={thaiAir}
                                    />
                                    <FlightDeals
                                        img={Deals02}
                                        img1={vistara}
                                    />
                                    <FlightDeals
                                        img={Deals03}
                                        img1={spicejet}
                                    />
                                    <FlightDeals
                                        img={Deals04}
                                        img1={airasia}
                                    />
                                </div>

                            </div>

                        </section>
                        <section class="flight-destination py-5 border-top" id="topDestination">
                            <div class="container">
                                <div class="row my-5 aos-init aos-animate" data-aos="fade-down">
                                    <div class="col-12">
                                        <h4 class="h3 text-center fw-bold theme-text-secondary mb-3">Flights to top destinations
                                        </h4>
                                        <p class="text-center theme-text-accent-two mb-0">Everything You Want &amp; More</p>
                                    </div>
                                </div>
                                <div class="row aos-init aos-animate" data-aos="fade-up">
                                    <TopDestinations
                                        img={destination01}
                                    />
                                    <TopDestinations
                                        img={destination02}
                                    />
                                    <TopDestinations
                                        img={destination03}
                                    />
                                    <TopDestinations
                                        img={destination04}
                                    />
                                    <TopDestinations
                                        img={destination05}
                                    />
                                    <TopDestinations
                                        img={destination06}
                                    />
                                    <TopDestinations
                                        img={destination07}
                                    />
                                    <TopDestinations
                                        img={destination08}
                                    />
                                    <TopDestinations
                                        img={destination09}
                                    />
                                </div>


                                {/* <div class="row aos-init aos-animate" data-aos="fade-up"><topDestination/></div> */}
                                {/* <topDestination/> */}


                            </div>
                        </section>
                        <section class="py-5 theme-bg-white border-top" id="howWork">
                            <div class="container">

                                <Working/>

                            </div>
                        </section>

                        <section className="recom-sec py-5 border-top" id="Recommendations">
                            <div className="container">
                                <div className="row my-5">
                                    <div
                                        className="col-12 aos-init aos-animate"
                                        data-aos="fade-up"
                                        data-aos-delay={200}
                                    >
                                        <p className="text-center theme-text-accent-two mb-3">
                                            <span className="ribbon">Recommendations</span>
                                        </p>
                                        <h5 className="theme-text-secondary h3 fw-bold text-center mb-0">
                                            Only Unique Experiences
                                        </h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <UniqueExperiences
                                        img={articles08}
                                    />
                                    <UniqueExperiences
                                        img={articles07}
                                    />
                                    <UniqueExperiences
                                        img={articles06}
                                    />
                                    <UniqueExperiences
                                        img={articles05}
                                    />
                                    <UniqueExperiences
                                        img={articles04}
                                    />
                                    <UniqueExperiences
                                        img={articles03}
                                    />
                                </div>
                            </div>
                        </section>


                        <div>
                            <div className="col-12 text-center">
                                <a
                                    href="blog.html"
                                    className="d-inline-flex mt-2 text-link text-link-effect"
                                >
                                    <span className="py-4 px-4">See more Popular Experiences</span>
                                </a>
                            </div>
                        </div>





                    </div>




                    <Footer />









                </div>
            </div >
        </>
    )
}

export default Home
