import React from 'react';

const ItemCard = (props) => {
  return (
    <div className='item-card'>
      {props.children}
    </div>
  );
};

export default ItemCard;