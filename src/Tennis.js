import React from 'react';
import './App.css';
import './Sport.css';
import Carouselequi from './Carouselequi';
import Carouselteam from './Carouselteam';
import Carouselcours from './Carouselcours';
import ActivitySection from './ActivitySection';
import Booking from './Booking';
import Reservation from './Reservation';

const tennisequi = [
  {
    src: 'https://via.placeholder.com/800x400?text=Tennis+1',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Tennis+2',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Tennis+3',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Tennis+4',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Tennis+5',
    title: 'title',
    description: 'description',
    price: '$price',
  },
];

const tennisteam = [
  {
    src: 'https://via.placeholder.com/800x400?text=Tennis+1',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Tennis+2',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Tennis+3',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Tennis+4',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Tennis+5',
    title: 'title',
    description: 'description',
    price: '$price',
  },
];

const tenniscours = [
  {
    src: 'https://via.placeholder.com/800x400?text=Tennis+1',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Tennis+2',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Tennis+3',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Tennis+4',
    title: 'title',
    description: 'description',
    price: '$price',
  },
  {
    src: 'https://via.placeholder.com/800x400?text=Tennis+5',
    title: 'title',
    description: 'description',
    price: '$price',
  },
];

function Tennis() {
  return (
    <div className="Sport">
      <div className="content">
        <ActivitySection title="Tennis" imageUrl="https://via.placeholder.com/800x400?" />
        <h2>Equipments</h2>
        <Carouselequi images={tennisequi} />
        <h2>Our team</h2>
        <Carouselteam images={tennisteam} />
        <h2>Classes</h2>
        <Carouselcours images={tenniscours} />
        <Booking />
        <Reservation />
      </div>
    </div>
  );
}

export default Tennis;
