import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Pagination } from "./Pagination";
import "./App.scss";
import { useQuery } from "@tanstack/react-query";

function App() {
  const [search, setSearch] = useState("");
  const { data, isLoading } = useQuery(["country"], () => {
    return axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => res.data);
  });

  ////
  // // pagination

  // const [currentPage,setCurrentPage]=useState(1);
  // const [elemsPerPage,setElemsPerPage]=useState(12);

  // const lastIndElem = currentPage * elemsPerPage;
  // const firstIndElem=lastIndElem - elemsPerPage;

  // const countries=data?.slice(firstIndElem,lastIndElem);

  if (isLoading) {
    return <h1 className="loading">Loading...</h1>;
  }

  return (
    <div className="App">
      <div className="countries container">
        <input
          className="countries__input"
          type="text"
          placeholder="search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <br />

        <div className="countries__content">
          {data
            ?.filter((country) => {
              return country.name.common
                .toLowerCase()
                .includes(search.toLowerCase());
            })
            .map((country) => {
              return (
                <div key={country.name.common} className="countries__card">
                  <Link to={`/detailcountry/${country.ccn3}`}>
                    <img
                      src={country.flags.svg}
                      alt=""
                      width="200"
                      height="200"
                    />
                  </Link>
                  <p>{country.name.common}</p>
                </div>
              );
            })}
        </div>
        {/* <Pagination totalElems={data.length} elemsPerPage={elemsPerPage}
                  setCurrentPage={setCurrentPage}
      /> */}
      </div>
    </div>
  );
}

export default App;
