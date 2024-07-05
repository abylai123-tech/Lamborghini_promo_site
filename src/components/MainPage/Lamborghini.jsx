import React, { useEffect, useRef } from 'react';
import "../styles/Lamborghini.css";

export const Lamborghini = () => {
  const sloganRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        console.log(entry); 
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sloganRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (sloganRefs.current) {
        sloganRefs.current.forEach(ref => {
          if (ref) {
            observer.unobserve(ref);
          }
        });
      }
    };
  }, []);

  return (
    <div id='lamborghiniSlogan'>
      <div id='sloganStart' className='slogan' ref={el => sloganRefs.current[0] = el}>
        <img src='./src/assets/images/lamborghini-logo-1.svg' height={100}/>
      </div>
      <div id='stylish' className='slogan' ref={el => sloganRefs.current[1] = el}>
        <div id='stylishText'>
          ЭТО СТИЛЬНО
        </div>
      </div>
      <div id='boldly' className='slogan' ref={el => sloganRefs.current[2] = el}>
        <div id='boldlyText'>
          ЭТО СМЕЛО
        </div>
      </div>
      <div id='fast' className='slogan' ref={el => sloganRefs.current[3] = el}>
        <div id='fastText'>
          ЭТО БЫСТРО
        </div>
      </div>
    </div>
  );
};
