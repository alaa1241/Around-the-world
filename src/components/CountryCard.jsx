/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CountryCard = ({ name, population, region, capital, flag }) => {
  return (
    <Link to={name}>
      <div className="h-full rounded-[10px] bg-gray-50 p-2.5 pb-9 lg:w-[264px] dark:bg-gray-800">
        <img
          src={flag}
          alt="placeholder"
          loading="lazy"
          className="mb-4 h-40 w-full rounded-lg"
        />
        <h2 className="mb-4 ml-3.5 text-lg font-extrabold">{name}</h2>
        <div className="ml-3.5 flex flex-col gap-2">
          <p>
            <span className="font-semibold">Population: </span>
            <span className="font-light"> {population}</span>
          </p>
          <p>
            <span className="font-semibold">Region:</span>
            <span className="font-light"> {region}</span>
          </p>
          <p>
            <span className="font-semibold">Capital</span>
            <span className="font-light"> {capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
