import React from "react";
import "./Earn.scss";
import em1 from "../../img/new/em1.png";
import em2 from "../../img/new/em2.png";
import em3 from "../../img/new/em3.png";
import em4 from "../../img/new/em4.png";
import em5 from "../../img/new/em5.png";
import tr from "../../img/new/tr.png";
import CFooter from "components/NewFooter/Footer";

function Earn(props) {
  return (
    <>
      <div className="earn-page">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="earn-page-sidebar">
                <div className="earn-page-sidebar-menu fw-400">
                  <div className="d-flex gap-3 mb-4 f-14">
                    <div>
                      <img src={em1} className="icon" />
                    </div>
                    <div>Overview</div>
                  </div>
                  <div className="d-flex gap-3 mb-4 f-14 t-gray">
                    <div>
                      <img src={em2} className="icon" />
                    </div>
                    <div>MMY & esMMY</div>
                  </div>
                  <div className="d-flex gap-3 mb-4 f-14  t-gray">
                    <div>
                      <img src={em3} className="icon" />
                    </div>
                    <div>MLP</div>
                  </div>
                  <div className="d-flex gap-3 mb-4 f-14 t-gray">
                    <div>
                      <img src={em4} className="icon" />
                    </div>
                    <div>Vest</div>
                  </div>
                  <div className="d-flex gap-3 mb-4 f-14 t-gray">
                    <div>
                      <img src={em5} className="icon" />
                    </div>
                    <div>Transfer account</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="earn-page-overview">
                <div className="f-24 mb-4">Overview</div>
                <div className="f-14 t-gray mb-5">
                  By staking MMY or MLP tokens on the Fantom, Optimism and Abitrum networks, you can earn protocol
                  income and rewards.
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="earn-page-overview-card">
                      <div className="f-16 fw-bold mb-3">Total rewards</div>
                      <div className="d-flex gap-3 mb-4">
                        <div>
                          <img src={tr} className="icon" />
                        </div>
                        <div>
                          <div className="t-gray f-14 mb-1">Total rewards</div>
                          <div className="f-24 fw-bold t-red">$0.00</div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="d-flex justify-content-between f-14 mb-3">
                          <div className="t-gray fw-400">FTM (WFTM)</div>
                          <div>
                            0.0000 <span className="t-gray">$0.00</span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between f-14 mb-3">
                          <div className="t-gray fw-400">MMY</div>
                          <div>
                            0.0000 <span className="t-gray">$0.00</span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between f-14 mb-3">
                          <div className="t-gray fw-400">esMMY</div>
                          <div>
                            0.0000 <span className="t-gray">$0.00</span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between f-14 mb-3">
                          <div className="t-gray fw-400">Multiplier Points</div>
                          <div>0.0000</div>
                        </div>
                        <div className="d-flex justify-content-between f-14 mb-3">
                          <div className="t-gray fw-400">Staked Multiplier Points</div>
                          <div>0.0000 </div>
                        </div>
                      </div>
                      <div className="">
                        <button>Connect Wallet</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="earn-page-overview-mini-card mb-4">
                      <div className="d-flex justify-content-between gap-3">
                        <div>
                          <div className="f-14 t-gray mb-1">MMY & esMMY staked</div>
                          <div>
                            0.00 <span className="t-gray">$0.00</span>
                          </div>
                        </div>
                        <div>
                          <div className="f-14 t-gray mb-1">APR</div>
                          <div className="t-red">169.47%</div>
                        </div>
                        <div className="align-self-center">
                          <button>Details</button>
                        </div>
                      </div>
                    </div>
                    <div className="earn-page-overview-mini-card mb-4">
                      <div className="d-flex justify-content-between gap-3">
                        <div>
                          <div className="f-14 t-gray mb-1">MMY & esMMY staked</div>
                          <div>
                            0.00 <span className="t-gray">$0.00</span>
                          </div>
                        </div>
                        <div>
                          <div className="f-14 t-gray mb-1">APR</div>
                          <div className="t-red">169.47%</div>
                        </div>
                        <div className="align-self-center">
                          <button>Details</button>
                        </div>
                      </div>
                    </div>
                    <div className="earn-page-overview-mini-card mb-4">
                      <div className="d-flex justify-content-between gap-3">
                        <div>
                          <div className="f-14 t-gray mb-1">MMY & esMMY staked</div>
                          <div>
                            0.00 <span className="t-gray">$0.00</span>
                          </div>
                        </div>
                        <div>
                          <div className="f-14 t-gray mb-1">APR</div>
                          <div className="t-red">169.47%</div>
                        </div>
                        <div className="align-self-center">
                          <button>Details</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CFooter />
    </>
  );
}

export default Earn;
