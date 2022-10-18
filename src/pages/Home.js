import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SlideShow from '../components/SlideShow/SlideShow';
import CustomerList from '../components/CustomerList/CustomerList';
import './Home.css'

function Home() {
    return (
        <>
        <Header />
        <main className='main__container'>
             <SlideShow />
             <CustomerList />
        </main>
        <Footer />
        </>
    )
}

export default Home;