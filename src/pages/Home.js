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
             <h5>Sobre</h5>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur odio quam, sed dignissim enim pharetra sagittis. Ut ultrices venenatis magna, eu vulputate enim rhoncus at. Cras sollicitudin facilisis mi, quis congue leo porta a. Morbi fermentum eleifend lectus in eleifend.</p>
        </main>
        <Footer />
        </>
    )
}

export default Home;