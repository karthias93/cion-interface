import React from "react";
import "./DashboardV3.scss";
import St1 from "../../img/new/st1.png";
import St2 from "../../img/new/st2.png";
import St3 from "../../img/new/st3.png";
import St4 from "../../img/new/st4.png";
import St5 from "../../img/new/st5.png";
import St6 from "../../img/new/st6.png";
import To1 from "../../img/new/to1.png";
import To2 from "../../img/new/to2.png";
import arb from "../../img/new/arb.png";
import op from "../../img/new/op.png";
import fth from "../../img/new/fth.png";
import CFooter from "components/NewFooter/Footer";

function DashboardV3(props) {
  return (
    <div className="dashobard-page">
      <div className="main-sec ">
        <div className="container">
          <div className="main-sec-card">
            <div className="f-24 fw-bold mb-3">Stats</div>
            <div className="t-gray fw-400 mb-5 f-14">
              Fantom Opera Total Stats start from 05 Dec 2022.
              <br />
              To view detailed stats, please check the <a>Analytics page</a>
            </div>
            <div className="row">
              <div className="col-md-4 mb-4">
                <div className="d-flex gap-3">
                  <div>
                    <img src={St1} className="st-icon" />
                  </div>
                  <div>
                    <div className="f-14 mb-1 t-gray">Total Value Locked</div>
                    <div className="f-24 fw-bold">$0</div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="d-flex gap-3">
                  <div>
                    <img src={St2} className="st-icon" />
                  </div>
                  <div>
                    <div className="f-14 mb-1 t-gray">Total Value Locked</div>
                    <div className="f-24 fw-bold">$0</div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="d-flex gap-3">
                  <div>
                    <img src={St3} className="st-icon" />
                  </div>
                  <div>
                    <div className="f-14 mb-1 t-gray">Total Value Locked</div>
                    <div className="f-24 fw-bold">$0</div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="d-flex gap-3">
                  <div>
                    <img src={St4} className="st-icon" />
                  </div>
                  <div>
                    <div className="f-14 mb-1 t-gray">Total Value Locked</div>
                    <div className="f-24 fw-bold">$0</div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="d-flex gap-3">
                  <div>
                    <img src={St5} className="st-icon" />
                  </div>
                  <div>
                    <div className="f-14 mb-1 t-gray">Total Value Locked</div>
                    <div className="f-24 fw-bold">$0</div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="d-flex gap-3">
                  <div>
                    <img src={St6} className="st-icon" />
                  </div>
                  <div>
                    <div className="f-14 mb-1 t-gray">Total Value Locked</div>
                    <div className="f-24 fw-bold">$0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="token-sec">
        <div className="container">
          <div className="f-24 fw-bold mb-4">Tokens</div>
          <div className="row">
            <div className="col-md-6">
              <div className="token-sec-card">
                <div className="d-flex justify-content-between gap-3 mtn-30 mb-4">
                  <div className="d-flex gap-3">
                    <div>
                      <img src={To1} className="to-head-icon" />
                    </div>
                    <div className="align-self-center">
                      <div className="f-14 fw-400 t-gray">MMY</div>
                      <div className="f-24 fw-bold">
                        <u>$0.56</u>
                      </div>
                    </div>
                  </div>
                  <div className="align-self-center">
                    <button>Read more</button>
                  </div>
                </div>

                <div className="row mb-5">
                  <div className="col-md-4">
                    <div>
                      <div className="f-14 fw-400 t-gray mb-1">Supply</div>
                      <div className="f-44 fw-bold">
                        <u>3,199,628 MMY</u>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <div className="f-14 fw-400 t-gray mb-1">Total Staked</div>
                      <div className="f-44 fw-bold">
                        <u>$649,875</u>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <div className="f-14 fw-400 t-gray mb-1">Market Cap</div>
                      <div className="f-44 fw-bold">
                        <u>$1,803,852</u>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="token-sec-card-list f-14">
                  <div className="token-sec-card-list-item">
                    <div className="d-flex justify-content-between gap-3">
                      <div className="d-flex gap-3">
                        <div>
                          <img src={arb} className="token-sec-card-list-item-icon" />
                        </div>
                        <div className="align-self-center">
                          Fantom APR: <span className="t-red">25.47%</span>
                        </div>
                      </div>
                      <div className="align-self-center">
                        <button>Buy on Fantom</button>
                      </div>
                    </div>
                  </div>
                  <div className="token-sec-card-list-item bg-gard-red">
                    <div className="d-flex justify-content-between gap-3">
                      <div className="d-flex gap-3">
                        <div>
                          <img src={op} className="token-sec-card-list-item-icon" />
                        </div>
                        <div className="align-self-center">
                          Fantom APR: <span className="t-red">25.47%</span>
                        </div>
                      </div>
                      <div className="align-self-center">
                        <button>Buy on Fantom</button>
                      </div>
                    </div>
                  </div>
                  <div className="token-sec-card-list-item">
                    <div className="d-flex justify-content-between gap-3">
                      <div className="d-flex gap-3">
                        <div>
                          <img src={arb} className="token-sec-card-list-item-icon" />
                        </div>
                        <div className="align-self-center">
                          Fantom APR: <span className="t-red">25.47%</span>
                        </div>
                      </div>
                      <div className="align-self-center">
                        <button>Buy on Fantom</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="token-sec-card">
                <div className="d-flex justify-content-between gap-3 mtn-30 mb-4">
                  <div className="d-flex gap-3">
                    <div>
                      <img src={To2} className="to-head-icon" />
                    </div>
                    <div className="align-self-center">
                      <div className="f-14 fw-400 t-gray">MLP</div>
                      <div className="f-24 fw-bold">
                        <u>$0.56</u>
                      </div>
                    </div>
                  </div>
                  <div className="align-self-center">
                    <button>Read more</button>
                  </div>
                </div>

                <div className="row mb-5">
                  <div className="col-md-3">
                    <div>
                      <div className="f-14 fw-400 t-gray mb-1">Supply</div>
                      <div className="f-44 fw-bold">
                        <u>3,199,628 MMY</u>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div>
                      <div className="f-14 fw-400 t-gray mb-1">Total Staked</div>
                      <div className="f-44 fw-bold">
                        <u>$649,875</u>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div>
                      <div className="f-14 fw-400 t-gray mb-1">Market Cap</div>
                      <div className="f-44 fw-bold">
                        <u>$1,803,852</u>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div>
                      <div className="f-14 fw-400 t-gray mb-1">Stablecoin Pct.</div>
                      <div className="f-44 fw-bold">59.00%</div>
                    </div>
                  </div>
                </div>

                <div className="token-sec-card-list f-14">
                  <div className="token-sec-card-list-item">
                    <div className="d-flex justify-content-between gap-3">
                      <div className="d-flex gap-3">
                        <div>
                          <img src={arb} className="token-sec-card-list-item-icon" />
                        </div>
                        <div className="align-self-center">
                          Fantom APR: <span className="t-red">25.47%</span>
                        </div>
                      </div>
                      <div className="align-self-center">
                        <button>Buy on Fantom</button>
                      </div>
                    </div>
                  </div>
                  <div className="token-sec-card-list-item bg-gard-red">
                    <div className="d-flex justify-content-between gap-3">
                      <div className="d-flex gap-3">
                        <div>
                          <img src={op} className="token-sec-card-list-item-icon" />
                        </div>
                        <div className="align-self-center">
                          Fantom APR: <span className="t-red">25.47%</span>
                        </div>
                      </div>
                      <div className="align-self-center">
                        <button>Buy on Fantom</button>
                      </div>
                    </div>
                  </div>
                  <div className="token-sec-card-list-item">
                    <div className="d-flex justify-content-between gap-3">
                      <div className="d-flex gap-3">
                        <div>
                          <img src={arb} className="token-sec-card-list-item-icon" />
                        </div>
                        <div className="align-self-center">
                          Fantom APR: <span className="t-red">25.47%</span>
                        </div>
                      </div>
                      <div className="align-self-center">
                        <button>Buy on Fantom</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="market-sec">
        <div className="container">
          <div className="f-24 fw-bold mb-4">Markets</div>
          <div className="market-sec-table">
            <table>
              <thead>
                <tr>
                  <th>Pair</th>
                  <th>Last Price</th>
                  <th>24h Change (%)</th>
                  <th>24h High</th>
                  <th>24h Volume</th>
                  <th>Open Interest</th>
                  <th>Chart</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={arb} className="t-icon me-2" /> FTM/USD
                  </td>
                  <td>$0.2372</td>
                  <td className="t-red">-5.57%</td>
                  <td>$0.2441</td>
                  <td>$26,771.5807</td>
                  <td>$9,255.7103</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    {" "}
                    <img src={op} className="t-icon me-2" /> FTM/USD
                  </td>
                  <td>$0.2372</td>
                  <td className="t-green">5.57%</td>
                  <td>$0.2441</td>
                  <td>$26,771.5807</td>
                  <td>$9,255.7103</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <CFooter />
    </div>
  );
}

export default DashboardV3;
