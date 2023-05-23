import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CountriesInfo = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    const getCountry = async () => {
      let res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      let finalRes = await res.json();
      console.log(finalRes);
      setCountry(finalRes);
    };
    getCountry();
  }, [name]);
  return (
    <div className="bgColor ">
      {country.map((eachCountry)=>{
        return(
         <div className="each1 mx-auto">
          <img className="img1" src={eachCountry.flags.svg} alt="" />
         <div className=" d-flex gap-5">
         <div>
            <p>NativeName: {eachCountry.name.common}</p>
            <p>Population: {eachCountry.population}</p>
            <p>Region: {eachCountry.region}</p>
            <p>Sub-region: {eachCountry.subregion}</p>
            <p>Capital: {eachCountry.capital}</p>
          </div>
          <div>
            <p>Top-level:</p>
            <p>Currency:</p>
            <p>Language:</p>
          </div>
         </div>
         </div>
        )
        

      })}
      
    </div>
  );
};

export default CountriesInfo;
