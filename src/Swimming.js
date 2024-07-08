import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSwimmingPool } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import './Swimming.css';
import Carouselequi from './Carouselequi';
import Carouselteam from './Carouselteam';
import Carouselcours from './Carouselcours';
import ActivitySection from './ActivitySection';
import Booking from './Booking';
import Reservation from './Reservation';

const swimmingequi = [
  {
    src: 'https://via.placeholder.com/800x400?text=Swimming+1',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Swimming+2',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Swimming+3',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Swimming+4',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Swimming+5',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  
];

const swimmingteam = [
  {
    src: 'https://via.placeholder.com/800x400?text=Swimming+1',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Swimming+2',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Swimming+3',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Swimming+4',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Swimming+5',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  
];

const swimmingcours = [
  {
    src: 'https://via.placeholder.com/800x400?text=Swimming+1',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Swimming+2',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Swimming+3',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Swimming+4',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Swimming+5',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  
];

function Swimming() {
  return (
    <div className="Swimming">
      <div className="content">
        <ActivitySection title="Swimming" imageUrl="/images/swimming.jpg" />
        <h2>Equipments</h2>
        <Carouselequi images={swimmingequi} />
        <h2>Our team</h2>
        <Carouselteam images={swimmingteam} />
        <h2>Classes</h2>
        <Carouselcours images={swimmingcours} />
        <Booking />
        <Reservation />
      </div>
    </div>
  );
}

export default Swimming;
