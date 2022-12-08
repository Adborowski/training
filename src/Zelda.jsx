import { useState, useEffect } from "react";
import styles from "./App.module.css";

const Zelda = () => {
  const queryUrl = "https://botw-compendium.herokuapp.com/api/v2";

  const [data, setData] = useState();

  const getData = async () => {
    const response = await fetch(queryUrl);
    const fetchedData = await response.json();
    console.log(fetchedData);
    setData(fetchedData.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.Zelda}>
      <h1>Zelda</h1>
      <div className={styles.monsters}>
        {data
          ? data.monsters.map((mon) => (
              <div className={styles.monster} key={mon.name}>
                <div
                  className={styles.picture}
                  style={{ backgroundImage: `url(${mon.image})` }}
                ></div>
                <div className={styles.name}>{mon.name}</div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Zelda;
