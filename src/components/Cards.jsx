import React from 'react';
import { Link } from 'react-router-dom';

function Cards({ item }) {
  return (
    <div className='mt-4 my-4 p-3'>
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200">
        <figure><img src={item.image} alt="Books" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions flex justify-between">
            <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 duration-200 hover:text-white">Add to Cart</div>
            <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 duration-200 hover:text-white">₹{item.price}</div>
            {/* Wrap the button with Link component */}
            <Link to="/payment">
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 duration-200 hover:text-white">Buy Now</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
