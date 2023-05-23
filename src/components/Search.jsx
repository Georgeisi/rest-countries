import React, { useState } from "react";

const Search = ({ countries, setInputValue, setFilteredArray, setRegion }) => {
  let filteredRegion = countries.filter((country) => {
    return country.region;
  });

  return (
    <div>
      <form
        action=""
        className="d-flex align-items-center justify-content-between py-5 px-3 filter "
      >
        <input
          onChange={(e) => {
            setInputValue(e.target.value);

            const filteredArray = countries.filter((country) =>
              country.name.common
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
            );

            setFilteredArray(filteredArray);
          }}
          type="text"
          name="search"
          id="search"
          placeholder="Search Country"
        />
        <div className="region-filter py-4">
          <select name="select" id="select">
            <option value="Filter by Region">Filter by Region</option>
            <option
              value="Africa"
              onClick={(e) => {
                filteredRegion.includes("Africa");

                setRegion(filteredRegion);
              }}
            >
              Africa
            </option>
            <option
              value="Americas"
              onClick={() => {
                let f = filteredRegion === "Americas" ? filteredRegion : "";
                setRegion(f);
                console.log(f);
              }}
            >
              Americas
            </option>
            <option
              value="Asia"
              onClick={() => {
                let filteredRegion = countries.filter(
                  (country) => country.region === "Asia"
                );
                setRegion(filteredRegion);
              }}
            >
              Asia
            </option>
            <option
              value="Europe"
              onClick={() => {
                let filteredRegion = countries.filter(
                  (country) => country.region === "Europe"
                );
                setRegion(filteredRegion);
              }}
            >
              Europe
            </option>
            <option
              value="Oceania"
              onClick={() => {
                let filteredRegion = countries.filter(
                  (country) => country.region === "Oceania"
                );
                setRegion(filteredRegion);
                console.log(filteredRegion);
              }}
            >
              Oceania
            </option>
          </select>
        </div>
      </form>
    </div>
  );
};
//

export default Search;
