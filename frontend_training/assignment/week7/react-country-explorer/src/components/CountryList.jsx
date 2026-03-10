
import CountryCard from "./CountryCard";

function CountryList({ countries }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {countries.map((country, idx) => (
        <CountryCard key={idx} country={country} />
      ))}
    </div>
  );
}

export default CountryList;