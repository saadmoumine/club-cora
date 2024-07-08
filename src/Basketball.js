import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import './Sport.css';
import Carouselequi from './Carouselequi';
import Carouselteam from './Carouselteam';
import Carouselcours from './Carouselcours';
import ActivitySection from './ActivitySection';
import Booking from './Booking';
import Reservation from './Reservation';

const basketballequi = [
  {
    src: 'https://via.placeholder.com/800x400?text=Basketball+1',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Basketball+2',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Basketball+3',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Basketball+4',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Basketball+5',
    title: 'title',
    description: 'description',
    price: '$price',
  },
];

const basketballteam = [
  {
    src: 'https://via.placeholder.com/800x400?text=Basketball+1',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Basketball+2',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Basketball+3',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Basketball+4',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Basketball+5',
    title: 'title',
    description: 'description',
    price: '$price',
  },
];

const basketballcours = [
  {
    src: 'https://via.placeholder.com/800x400?text=Basketball+1',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Basketball+2',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Basketball+3',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Basketball+4',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Basketball+5',
    title: 'title',
    description: 'description',
    price: '$price',
  },
];

function Basketball() {
  return (
    <div className="Sport">
      <div className="content">
        <ActivitySection title="Basketball" imageUrl="https://via.placeholder.com/800x400?" />
        <h2>Equipments</h2>
        <Carouselequi images={basketballequi} />
        <h2>Our team</h2>
        <Carouselteam images={basketballteam} />
        <h2>Classes</h2>
        <Carouselcours images={basketballcours} />
        <Booking />
        <Reservation />
      </div>
    </div>
  );
}

export default Basketball;
