import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FitnessJourney from '../components/FitnessJourney';
import { useState } from 'react';

export default function Home() {
  const [hide , setHide] = useState(false);
  return (
    <>
      {!hide && <Header />}
      <Hero func={setHide} />
        <div style ={{height: 'auto', width:"100%", alignContent: 'center', objectFit: 'contained', margin: "20px"}}>
          <img src="./Special bottle.png" alt= "Special bottle" style={{width: '100%',height:'auto',objectFit: 'cover'}} />
        </div>
        <FitnessJourney />
      <Footer />
    </>
  );
}
