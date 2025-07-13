import React from 'react';
import Navbar from './Components/Navbar';
import Herosection from './Components/Herosection';
import Epicsection from './Components/Epicsection';
import Portfoliosection from './Components/Portfoliosection';
import Valuesection from './Components/Valuesection';
import Renovatonsection from './Components/Renovatonsection';
import WhatWeDosection from './Components/WhatWeDosection';
import Mockupsection from './Components/Mockupsection';
import Digitalsection from './Components/Digitalsection';
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';

const MainLayout = () => {
    return (
        <div className='bg-[#dccec5] h-full'>
            <Navbar/>
            <Herosection/>
            <Epicsection/>
            <Portfoliosection/>
            <Valuesection/>
            <Renovatonsection/>
            <WhatWeDosection/>
            <Mockupsection/>
            <Digitalsection/>
            <Contactus/>
            <Footer/>
            
        </div>
    );
};

export default MainLayout;