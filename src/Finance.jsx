import styles from "./App.module.css";
import { useEffect, useState } from "react";
import Coin from "./Coin";

const Finance = () => {
  const apiUrl = "https://api2.binance.com/api/v3/ticker/24hr";

  const [finData, setFinData] = useState();
  const [filteredData, setFilteredData] = useState();
  const [feedback, setFeedback] = useState();

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setFinData(data);
        setFilteredData(data);
      });
  }, []);

  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  useEffect(() => {
    if (search.length == 0) {
      setFilteredData(finData);
    }
    if (finData) {
      console.log(finData);
      const filteredData = finData.filter((item) =>
        item.symbol.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filteredData);

      if (filteredData.length == 0) {
        setFeedback("Nothing found");
      } else {
        setFeedback("");
      }
    }
  }, [search]);

  return (
    <div className={styles.Finance}>
      <div className={styles.searchWrapper}>
        <input
          onChange={handleSearchChange}
          placeholder={"search for symbol"}
        ></input>
      </div>
      <div className={styles.coins}>
        {feedback}
        {filteredData
          ? filteredData.map((item) => {
              return <Coin key={item.symbol} coin={item} />;
            })
          : "Loading..."}
      </div>
    </div>
  );
};

export default Finance;
