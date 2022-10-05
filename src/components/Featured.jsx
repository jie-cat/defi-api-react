import React, { useState, useEffect } from "react";
import "./Featured.scss";
import axios from "axios";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";

const Featured = () => {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";

  // 取得API 資料
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  if (!data) {
    return null;
  }

  console.log(data);

  return (
    <div className="featured">
      <div className="container">
        {/* left */}
        <div className="left">
          <h3>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h3>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <button className="btn">See More Coins</button>
        </div>
        {/* right */}
        <div className="right">
          {/* card 1 */}
          <div className="card">
            <div className="top">
              <img src={data[0].image} alt="jpg" />
            </div>
            <div>
              <h5>{data[0].name}</h5>
              <p>${data[0].current_price}</p>
            </div>
            {data[0].price_change_24h > 0 ? (
              <span className="green">
                <FiArrowUpRight size={25} />
                {data[0].price_change_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="red">
                <FiArrowDown size={25} />
                {data[0].price_change_24h.toFixed(2)}%
              </span>
            )}
          </div>
          {/* card 2 */}
          <div className="card">
            <div className="top">
              <img src={data[1].image} alt="jpg" />
            </div>
            <div>
              <h5>{data[1].name}</h5>
              <p>${data[1].current_price}</p>
            </div>
            {data[1].price_change_24h > 0 ? (
              <span className="green">
                <FiArrowUpRight size={25} />
                {data[1].price_change_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="red">
                <FiArrowDown size={25} /> {data[1].price_change_24h.toFixed(2)}%
              </span>
            )}
          </div>
          {/* card 3 */}
          <div className="card">
            <div className="top">
              <img src={data[2].image} alt="jpg" />
            </div>
            <div>
              <h5>{data[2].name}</h5>
              <p>${data[2].current_price}</p>
            </div>
            {data[2].price_change_24h > 0 ? (
              <span className="green">
                <FiArrowUpRight size={25} />
                {data[2].price_change_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="red">
                <FiArrowDown size={25} /> {data[2].price_change_24h.toFixed(2)}%
              </span>
            )}
          </div>
          {/* card 4 */}
          <div className="card">
            <div className="top">
              <img src={data[3].image} alt="jpg" />
            </div>
            <div>
              <h5>{data[3].name}</h5>
              <p>${data[3].current_price}</p>
            </div>
            {data[3].price_change_24h > 0 ? (
              <span className="green">
                <FiArrowUpRight size={25} />
                {data[3].price_change_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="red">
                <FiArrowDown size={25} /> {data[3].price_change_24h.toFixed(2)}%
              </span>
            )}
          </div>
          {/* card 5 */}
          <div className="card">
            <div className="top">
              <img src={data[4].image} alt="jpg" />
            </div>
            <div>
              <h5>{data[4].name}</h5>
              <p>${data[4].current_price}</p>
            </div>
            {data[4].price_change_24h > 0 ? (
              <span className="green">
                <FiArrowUpRight size={25} />
                {data[4].price_change_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="red">
                <FiArrowDown size={25} /> {data[4].price_change_24h.toFixed(2)}%
              </span>
            )}
          </div>
          {/* card 6 */}
          <div className="card">
            <div className="top">
              <img src={data[5].image} alt="jpg" />
            </div>
            <div>
              <h5>{data[5].name}</h5>
              <p>${data[5].current_price}</p>
            </div>
            {data[5].price_change_24h > 0 ? (
              <span className="green">
                <FiArrowUpRight size={25} />
                {data[5].price_change_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="red">
                <FiArrowDown size={25} /> {data[5].price_change_24h.toFixed(2)}%
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
