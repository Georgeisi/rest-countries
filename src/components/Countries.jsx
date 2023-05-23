import React from 'react'
import { Link } from 'react-router-dom'

const Countries = ({Countries}) => {
  // console.log(Countries);
  
// console.log(finalData);
  return (
    <div className='country-container'>
        {Countries.map((country)=>{
          return(
            <>
            <Link className='texidecoration' to={`/detail/${country.name.common}`}>
            <div className='each-country mx-auto bg-dark-blue rounded'>
              <img className='w-100 rounded-top img-height ' src={country.flags.png} alt="" />
              <div className='p-4 text-start'>
              <h3 className='mb-3'>{country.name.common}</h3>
              <p className='mb-1'>Population: {country.population}</p>
              <p className='mb-1'>Region: {country.region}</p>
              <p className='mb-1'>Capital: {country.capital}</p>
              </div>
            </div>
            </Link>
            </>
          )
        })}
    </div>
  )
}

export default Countries