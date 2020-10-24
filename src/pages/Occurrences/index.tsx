import React from 'react';
import SVG_6 from '../../assets/images/svg-6.svg';

function Occurrences() {
  return (
    <>
      <div
        className={'home__hero-section'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>Occurrence Itens</div>
                <h1 className={'heading dark'}>
                  List of occurrences 
                </h1>
                <p
                  className={'home__hero-subtitle dark'}
                >
                  Here you can see a list of events that you can see the data received through a mobile application. This is an example using Api with nodejs, typeorm, nestjs, mysql, messaging and scalability. Click and learn a little more.
                </p>
                
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={SVG_6} alt={''} className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Occurrences;
