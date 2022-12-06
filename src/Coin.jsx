import styles from "./App.module.css";

const Coin = (props) => {
  return (
    <div className={styles.coin} key={props.coin.symbol}>
      <div className={styles.symbol}>{props.coin.symbol}</div>
      <div>Ask Price: {props.coin.askPrice}</div>
      <div>Count: {props.coin.count}</div>
    </div>
  );
};

export default Coin;
