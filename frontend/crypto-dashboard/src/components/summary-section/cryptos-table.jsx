import { useEffect } from "react";
import { useState } from "react";
import Crypto from "./crypto";

function CryptoTable() {
  const [cryptos, setCryptos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/cryptos/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCryptos(data);
      });
  }, [cryptos]);
  return (
    <div className="crypto-table">
      <table className="table table-borderless text-center">
        <thead>
          <tr>
            <th>
              <h4>
                <span>Id</span>
              </h4>
            </th>
            <th>
              <h4>
                <span>Name</span>
              </h4>
            </th>
            <th>
              <h4>
                <span>Last</span>
              </h4>
            </th>
            <th>
              <h4>
                <span>Buy</span>
              </h4>
            </th>
            <th>
              <h4>
                <span>Sell</span>
              </h4>
            </th>
            <th>
              <h4>
                <span>Volume</span>
              </h4>
            </th>
            <th>
              <h4>
                <span>Base_unit</span>
              </h4>
            </th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto) => (
            <Crypto
              key={crypto.id}
              id={crypto.id}
              name={crypto.name}
              last={crypto.last}
              buy={crypto.buy}
              sell={crypto.sell}
              volume={crypto.volume}
              base_unit={crypto.base_unit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CryptoTable;
