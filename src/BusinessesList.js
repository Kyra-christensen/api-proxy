import React from 'react';
import BusinessType from './BusinessType';

export default function BusinessesList({ businessesArr }) {
  return (
    <div>
      {
        businessesArr.map((yelpItem, i) =>
          <div key={yelpItem + i}> 
            <h3>{yelpItem.name}</h3>
            <p>{yelpItem.location.display_address}</p>
            <p>{yelpItem.rating}⭐</p>
            <div>
              <BusinessType categories={yelpItem.categories}/>
            </div>
            <img src={yelpItem.image_url} style={{ width: '200px' }}/>
          </div>)
      }
    </div>
  );
}
