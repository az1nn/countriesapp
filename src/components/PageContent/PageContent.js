import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

import ItemCard from '../ItemCard/ItemCard';

var _ = require('lodash');

const GET_ITEMS = gql`
  query {
    continent(code: "SA"){
      countries {
        name capital emoji languages {
          name
        } currency
      }
    }
  }
`;

const PageContent = () => {
  const { loading, data } = useQuery(GET_ITEMS)
  const [ info, setMyInfo ] = useState([])
  
  useEffect(() => {
    if(data) {
      setMyInfo(data.continent.countries)
    }
  }, [data])
  
  function SortByAlphaReverse() {
    var sortedbyalphaReverse = _.sortBy( info, 'info.name' ).reverse()
    setMyInfo(sortedbyalphaReverse)
  }

  if (loading) return (
    <div id='countries-container'>LOADING...</div>
  )

  return (
    <div>
      <button id='sort-button' onClick={SortByAlphaReverse}>Ordenar Alfabeticamente:</button>
      <div id='countries-container'>
        {info.map((val, index) => {
          return <ItemCard key={index}> 
            <p>{val.emoji}</p>
            <h1>País: {val.name} </h1>
            <p>Capital: {val.capital} </p> 
            <p>Idiomas: {val.languages.map((item) => { return ` `+item.name })}</p>
            <p>Moeda: {val.currency}</p>
            </ItemCard>
        })}
      </div>
    </div>
  );
};

export default PageContent;
