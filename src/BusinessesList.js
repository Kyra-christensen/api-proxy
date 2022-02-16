import React from 'react';

export default function BusinessesList({ businessesArr }) {
  return (
    <div>
      {
        businessesArr.map((yelpItem, i) =>
          <div key={yelpItem + i}> 
            <h3>{yelpItem.name}</h3>
            <p>{yelpItem.location.display_address}</p>
            <p>{yelpItem.rating}⭐</p>
            <img src={yelpItem.image_url} style={{ width: '200px' }}/>
          </div>)
      }
    </div>
  );
}
