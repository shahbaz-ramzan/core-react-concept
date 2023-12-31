import { useState } from "react";

const SearchParams = () => {
  //   const location = "Seattle,WA";
  const [location, setLocation] = useState("Seattle,WA");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
      </form>
      <button>Submit</button>
    </div>
  );
};
export default SearchParams;
