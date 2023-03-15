import React from 'react'

const Banner = () => {
  return (
    <>
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5">
                        <h2 className="h4 text-center text-white mb-4">
                            The best tour experience
                        </h2>
                        <h1 className="h1 text-center theme-text-white fw-bold theme-text-shadow mb-4">
                            Find and book best{" "}
                            <span className="theme-text-primary" id="changingword">
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
    </>
  )
}

export default Banner