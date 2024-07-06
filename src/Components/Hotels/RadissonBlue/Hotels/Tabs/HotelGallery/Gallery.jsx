import React from 'react'
import './Gallery.css'
import g1 from '../../../Hotel_Images/g1.avif';
import g2 from '../../../Hotel_Images/g2.avif';
import g3 from '../../../Hotel_Images/g3.avif';
import g4 from '../../../Hotel_Images/g4.avif';

export default function Gallery() {
  return (
    <div className="main">
        <ul class='list'>
            <li class='item'><img src={g1} /></li>
            <li class='item'><img src={g2} /></li>
            <li class='item'><img src={g3} /></li>
            <li class='item'><img src={g1} /></li>
            <li class='item'><img src={g4} /></li>
            <li class='item'><img src={g2} /></li>
            
        </ul>
    </div>
  )
}
