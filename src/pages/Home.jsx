import RegionMenu from "../components/RegionMenu";
import ShowMessage from "../components/ShowMessage";
import CountryList from "../components/CountryList";
import SearchInput from "../components/SearchInput";
import { useFetchData } from "../useFetchData";

const Home = () => {
  const {
    result,
    isLoading,
    isError,
    filteredCountries,
    setFilteredCountries,
  } = useFetchData();

  return (
    <>
      {isError && <ShowMessage message="Somthing went wrong!"></ShowMessage>}
      {isLoading && (
        <ShowMessage message="Loading countries data...!"></ShowMessage>
      )}
      {!isError && !isLoading && (
        <>
          <div className="md:gap0 flex flex-col justify-between gap-12 md:h-14 md:flex-row">
            <SearchInput
              countriesList={result}
              filterCountriesList={setFilteredCountries}
            />
            <RegionMenu
              countriesList={result}
              filterCountriesList={setFilteredCountries}
            />
          </div>
          <CountryList data={filteredCountries} />
        </>
      )}
    </>
  );
};

export default Home;
