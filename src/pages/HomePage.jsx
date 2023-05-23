import React, { useState } from "react";
import Search from "../components/Search";
import Countries from "../components/Countries";
import { useFetch } from "../hooks/useFetch";
import NoCountryAvailable from "../utils/NoCountryAvailable";

import Loading from "../components/Loading";

const HomePage = () => {
  const { data, loading } = useFetch("https://restcountries.com/v3.1/all");
  const [filteredArray, setFilteredArray] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [region, setRegion]= useState([])

  // !loading && console.log(data)
  return (
    <div className="bg-very-dark-blue text-color-white">
      {loading && <p>Loading</p>}
      {!loading && (
        <div>
          <Search countries={data} setInputValue={setInputValue} setFilteredArray={setFilteredArray} setRegion={setRegion} />
          <Countries Countries={filteredArray.length < 1 && inputValue === '' ? data : filteredArray} />
          {filteredArray.length < 1 && inputValue !== '' && <NoCountryAvailable/>}
        </div>
      )}
    </div>
  );
};

export default HomePage;
