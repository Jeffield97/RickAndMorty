import React, { useRef, useState } from "react";
import "./Banner.css";
const Banner = ({ setLocationSelected, locations, locationSelected }) => {
  const [listNames, setListNames] = useState([]);
  const inputNameRef = useRef();
  console.log(locations);

  const getLocationById = (id) => {
    // console.log(locations)
    const location = locations.filter((location) => {
      return location.id == id;
    });
    console.log(location[0]);
    return location[0];
  };
  const handleItemSelection = (e) => {
    console.log(`Id: ${e.target.id}`);
    const locationSelectedById = getLocationById(e.target.id);
    setLocationSelected(locationSelectedById);
    setListNames([]);
    // console.log(e.target.value)
    console.log(inputNameRef.current.value=locationSelectedById.name)
  };
  const getLocationsByName = (name) => {
    if (name) {
      const locationsFiltered = locations.filter((location) => {
        return location.name.includes(name) === true;
      });
      setListNames(locationsFiltered);
    } else {
      setListNames([]);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = getLocationById(e.target.idWorld.value);
    setLocationSelected(newLocation);
  };
  const handleChangeInput = (e) => {
    console.log(e.target.value);
    getLocationsByName(e.target.value);
  };
  return (
    <div className="relative top-0 z-10 w-full h-fit shadow-md shadow-slate-800 bg-base-200 p-10">
      <h1 className="text-4xl uppercase">
        <a href="/">Rick and Morty API</a>
      </h1>
      <div className="flex justify-center mt-10">
        <form action="" onSubmit={handleSubmit}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Search world by id</span>
            </label>
            <input
              id="idWorld"
              type="number"
              placeholder="Type here"
              className="input input-bordered w-4/6 max-w-xs h-8 text-sm"
              min={1}
              max={116}
            />
          </div>
        </form>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Search world by Name</span>
            </label>
            <input
              onChange={handleChangeInput}
              id="idName"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-4/6 max-w-xs h-8 text-sm"
              max={216}
              ref={inputNameRef}
            />
            {listNames.length == 0 ? null : (
              <ul className="absolute z-10 top-48 bg-base-200 px-8 rounded-xl border border-white">
                {listNames.map((listName) => (
                  <div key={listName.id}>
                    <li
                      id={listName.id}
                      value={listName.name}
                      className="hover:cursor-pointer hover:text-amber-500"
                      onClick={handleItemSelection}
                    >
                      {listName.name}
                    </li>
                  </div>
                ))}
              </ul>
            )}
          </div>
        </form>
      </div>
      <div className="mt-8">
        <h2>
          <span className="font-light">Location selected:</span>{" "}
          {locationSelected?.name}
        </h2>
        <h2>
          <span className="font-light">Location Id:</span>{" "}
          {locationSelected?.id}
        </h2>
      </div>
    </div>
  );
};

export default Banner;
