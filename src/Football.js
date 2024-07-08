import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFootballBall } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import './Sport.css';
import Carouselequi from './Carouselequi';
import Carouselteam from './Carouselteam';
import Carouselcours from './Carouselcours';
import ActivitySection from './ActivitySection';
import Booking from './Booking';
import Reservation from './Reservation';

const footballequi = [
  {
    src: 'https://via.placeholder.com/800x400?text=Football+1',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Football+2',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Football+3',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Football+4',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Football+5',
    title: 'title',
    description: 'description',
    price: '$price',
  },
];

const footballteam = [
  {
    src: 'https://via.placeholder.com/800x400?text=Football+1',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Football+2',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Football+3',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Football+4',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Football+5',
    title: 'title',
    description: 'description',
    price: '$price',
  },
];

const footballcours = [
  {
    src: 'https://via.placeholder.com/800x400?text=Football+1',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Football+2',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Football+3',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Football+4',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Football+5',
    title: 'title',
    description: 'description',
    price: '$price',
  },
];

function Football() {
  return (
    <div className="Sport">
      <div className="content">
        <ActivitySection title="Football" imageUrl="https://via.placeholder.com/800x400?" />
        <h2>Equipments</h2>
        <Carouselequi images={footballequi} />
        <h2>Our team</h2>
        <Carouselteam images={footballteam} />
        <h2>Classes</h2>
        <Carouselcours images={footballcours} />
        <Booking />
        <Reservation />
      </div>
    </div>
  );
}

export default Football;
