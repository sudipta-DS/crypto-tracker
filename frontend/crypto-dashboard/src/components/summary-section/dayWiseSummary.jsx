function DaywiseSummary() {
  return (
    <div className="trade-summary-section">
      <div className="text-center">
        <div className="average-header-maintext profit">0.01 %</div>
        <div className="average-duration">5 Mins</div>
      </div>
      <div className="text-center">
        <div className="average-header-maintext profit">0.67 %</div>
        <div className="average-duration">1 Hour</div>
      </div>
      <div className="overall-average">
        <div className="text-center">
          <div className="average-subText">
            <span className="trade-text">Best Price to Trade</span>
          </div>
          <div className="average-heading">₹ 50,59,311</div>
          <div className="average-subText commission">
            Average BTC/INR net price including commission
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="average-header-maintext profit">8.85 %</div>
        <div className="average-duration">1 Day</div>
      </div>
      <div className="text-center">
        <div className="average-header-maintext profit">13.73 %</div>
        <div className="average-duration">7 Days</div>
      </div>
    </div>
  );
}

export default DaywiseSummary;
