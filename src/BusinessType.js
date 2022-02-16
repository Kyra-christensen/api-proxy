import React from 'react';

export default function BusinessType({ categories }) {
  return (
    <div>
      {
        categories.map((type, i) => <p key={type + i}>{type.title}</p>)
      }
    </div>
  );
}
