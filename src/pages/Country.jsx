import { Link, useParams } from "react-router-dom";
import ShowMessage from "../components/ShowMessage";
import { useFetchData } from "../useFetchData";

const Country = () => {
  const { country } = useParams();
  const { result, isLoading, isError } = useFetchData(country);
  return (
    <>
      {isError && <ShowMessage message="Somthing went wrong!"></ShowMessage>}
      {isLoading && (
        <ShowMessage message="Loading countries data...!"></ShowMessage>
      )}
      {!isError && !isLoading && (
        <div className="">
          <Link
            to="/"
            className="mb-16 inline-block rounded-md bg-white p-3 md:mb-20"
          >
            <svg
              width="16"
              height="11"
              viewBox="0 0 16 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.31366 0.628428L6.25647 1.57124L3.1452 4.68251L15.0246 4.68251L15.0246 6.00244L3.1452 6.00244L6.25647 9.11371L5.31366 10.0565L0.599617 5.34247L5.31366 0.628428Z"
                fill="#111827"
              />
            </svg>
          </Link>
          <div className="grid gap-11 lg:grid-cols-2 lg:gap-36">
            <img
              src={result?.flags?.svg}
              alt={result?.flags?.alt}
              className="w-full"
            />
            <div>
              <h1 className="mb-4 text-3xl font-extrabold lg:mb-7">
                {result?.name?.common}
              </h1>
              <div className="flex flex-col gap-8 md:gap-40 lg:flex-row">
                <div className="flex flex-col gap-5">
                  <p>
                    <span className="font-semibold">Native Name: </span>
                    <span className="font-light">{result?.name?.common}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Population: </span>
                    <span className="font-light">
                      {parseInt(result?.population).toLocaleString()}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Region: </span>
                    <span className="font-light">{result?.region}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Sup Region: </span>
                    <span className="font-light">{result?.subregion}</span>
                  </p>
                  <p>
                    <span className="font-semibold">Capital: </span>
                    <span className="font-light">{result?.capital}</span>
                  </p>
                </div>
                <div className="flex flex-col gap-5">
                  <p>
                    <span className="font-semibold">Top Level Domain: </span>
                    <span className="font-light">
                      {result?.tld?.join(", ")}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Currencies: </span>
                    <span className="font-light">
                      {result?.currencies &&
                        Object.values(result.currencies)
                          .map((currency) => `${currency?.name}`)
                          .join(", ")}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Languages: </span>
                    <span className="font-light">
                      {result?.languages &&
                        Object.values(result.languages)
                          .map((language) => `${language}`)
                          .join(", ")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Country;
