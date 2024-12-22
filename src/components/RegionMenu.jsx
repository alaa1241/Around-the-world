/* eslint-disable react/prop-types */
import Select from "react-select";

const options = [
  { value: "all regions", label: "All regions" },
  { value: "africa", label: "Africa" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

const RegionMenu = ({ countriesList, filterCountriesList }) => {
  function handleChange(e) {
    const region = e.label;
    const filteredCountries =
      region === "All regions"
        ? countriesList
        : countriesList.filter((country) => country.region === region);
    filterCountriesList(filteredCountries);
  }
  return (
    <Select
      defaultValue={options[0]}
      options={options}
      onChange={handleChange}
      classNames={{
        input: () => "dark:!text-gray-100",
        singleValue: () => "dark:text-gray-100",
        control: () =>
          "flex h-12 items-center  justify-between gap-12 sm:w-auto w-52  rounded-md !border-none pl-4 pr-2 shadow dark:bg-gray-800 dark:text-gray-800 md:h-14",
        option: () => "hover:!text-gray-800",
        indicatorSeparator: () => "hidden",
        menu: () => "bg-gray-100 dark:bg-gray-800 dark:text-gray-100",
      }}
    />
  );
};

export default RegionMenu;
