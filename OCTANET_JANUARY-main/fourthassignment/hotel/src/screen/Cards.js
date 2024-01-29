import React from 'react'
import { FaHotel } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa";

const Cards = () => {
  return (
    <div>
      <div className='card'>
            <div>
                <div className='first-card'>
                <div className='icon'>
                     <FaHotel />
                </div>
                    <div class="description">
                        <div className='title' class="title">
                            <h3>Great Location
                            </h3>
                        </div>
                        <div className='tags'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, eligendi?
                            </p>
                        </div>

                    </div>
                </div>

                <div className='sec-card'>
                <div className='icon'>
                     <FaUtensils />
                </div>
                    <div class="description">
                        <div className='title' class="title">
                            <h3>Free Meals
                            </h3>
                        </div>
                        <div className='tags'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impeedit, nemo.
                            </p>
                        </div>

                    </div>
                </div>
                <div className='third-card'>
                <div  className='icon'>
                     <FaDumbbell />
                </div>
                    <div class="description">
                        <div className='title' class="title">
                            <h3>Fitness Room
                            </h3>
                        </div>
                        <div className='tags'>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, quos!
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards
