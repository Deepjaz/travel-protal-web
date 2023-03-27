import React, { useState, useEffect } from 'react';

const Banner = () => {
    const [wordIndex, setWordIndex] = useState(0);
  const [words, setWords] = useState(['seats', 'tickets', 'places']);
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsBlinking(isBlinking => !isBlinking);
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const wordIntervalId = setInterval(() => {
      setWordIndex((wordIndex + 1) % words.length);
    }, 3000);

    return () => {
      clearInterval(wordIntervalId);
    };
  }, [wordIndex, words]);

  return (
    <>
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5">
                        <h2 className="h4 text-center text-white mb-4">
                            The best tour experience
                        </h2>
                        {/* <h1 className={isBlinking ? 'blinking  theme-text-primary' : ''}>Find and book best {words[wordIndex]}!</h1> */}
                        <h1 className="h1 text-center theme-text-white fw-bold theme-text-shadow mb-4">
                            Find and book best{" "}
                            <span className= {isBlinking ? 'blinking  theme-text-primary' : ''} id="changingword" 
                            >
                                 {words[wordIndex]}
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