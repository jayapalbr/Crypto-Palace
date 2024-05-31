import React from "react";
import "./Navbar.css";
import { useContext } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", Symbol: "$" });
        break;
      }

      case "eur": {
        setCurrency({
          name: "eur",
          Symbol: "E-",
        });
        break;
      }
      case "inr": {
        setCurrency({
          name: "inr",
          Symbol: "Rs- ",
        });
        break;
      }
      default: {
        setCurrency({ name: "usd", Symbol: "$" });
        break;
      }
    }
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        {" "}
        <h3>CRYPTO CURRENCY</h3>
      </Link>
      <ul className="">
        <Link to={"/"}>
          {" "}
          <li>Home</li>
        </Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select name="" id="" onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EURO</option>
          <option value="inr">INR</option>
        </select>
        <button>Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
