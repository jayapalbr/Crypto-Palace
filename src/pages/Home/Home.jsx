import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");
  const inputHAndler = (e) => {
    setInput(e.target.value);
    if (e.target.value === "") {
      setDisplayCoin(allCoin);
    }
  };
  const searchHandlr = async (e) => {
    e.preventDefault();
    const coins = await allCoin.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    //bitcion  ---bit
    setDisplayCoin(coins);
  };

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);
  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br />
          Crypto Market Place
        </h1>
        <p>
          Welcome to the world largest cryptocurrency marketplace.Sign up to
          explore more about cryptos{" "}
        </p>
        <form onSubmit={searchHandlr}>
          <input
            type="text"
            list="coinlist"
            value={input}
            onChange={inputHAndler}
            placeholder="Search crypto"
            required
          />
          <datalist id="coinlist">
            {allCoin.map((item, index) => (
              <option key={index} value={item.name} />
            ))}
          </datalist>
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Prices</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p className="market-cap">Market Cap</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} width={30} />
              <p>{item.name + " - " + item.symbol} </p>
            </div>
            <p>
              {currency.Symbol}
              {item.current_price}
            </p>
            <p className={item.price_change_24h > 0 ? "green" : "red"}>
              {Math.floor(item.price_change_24h * 100) / 100}
            </p>
            <p className="market-cap">
              {currency.Symbol}
              {item.market_cap.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
