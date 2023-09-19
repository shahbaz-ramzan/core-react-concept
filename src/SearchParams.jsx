import { useState } from "react";

const SearchParams = () => {
  //   const location = "Seattle,WA";
  const [location, setLocation] = useState("");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
      </form>
      <button>Submit</button>
    </div>
  );
};
export default SearchParams;
