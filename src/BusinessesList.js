import React from 'react';
import BusinessType from './BusinessType';

export default function BusinessesList({ businessesArr }) {
  return (
    <div className='business-card'>
      {
        businessesArr.map((yelpItem, i) =>
          <div key={yelpItem + i} className='business-item'> 
            <h3>{yelpItem.name}</h3>
            <p>{yelpItem.location.display_address}</p>
            <div>
              <BusinessType categories={yelpItem.categories}/>
            </div>
            <p>{yelpItem.rating}⭐</p>
            <img src={yelpItem.image_url} style={{ width: '200px' }}/>
          </div>)
      }
    </div>
  );
}
