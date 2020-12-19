import React from "react";
import "bootswatch/dist/darkly/bootstrap.css";

class CoinList extends React.Component {
  render() {
    const coinlist = this.props.coinlist;
    return (
      <div>
        {coinlist.map(
          ({
            id,
            name,
            symbol,
            image,
            current_price,
            market_cap,
            market_cap_rank,
            total_volume,
            high_24h,
            low_24h,
            price_change_24h,
            price_change_percentage_24h,
            market_cap_change_24h,
            market_cap_change_percentage_24h,
            ath,
            ath_change_percentage,
            ath_date,
            circulating_supply,
            price_change_percentage_1h_in_currency,
            price_change_percentage_7d_in_currency,
            price_change_percentage_14d_in_currency,
            price_change_percentage_30d_in_currency,
            price_change_percentage_200d_in_currency,
            price_change_percentage_1y_in_currency,
            sparkline_in_7d
          }) => (
            <div className="card border-info mb3">
              <h5 className="card-tittle py-1">{id}</h5>
              <div className="mx-auto py-2">{symbol}</div>
            </div>
          )
        )}
      </div>
    );
  }
}

export default CoinList;
