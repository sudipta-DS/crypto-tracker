import CryptoTable from "./cryptos-table";
import DaywiseSummary from "./dayWiseSummary";
import ExchangeTable from "./exchange-table";

function SummarySection() {
  return (
    <div className="main-content">
      <DaywiseSummary />
      <ExchangeTable />
      <div className="crypto-header">Top Traded Cryptocurrencies</div>
      <CryptoTable />
    </div>
  );
}

export default SummarySection;
