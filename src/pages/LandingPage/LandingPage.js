import React from "react";
import "./landing-page.scss";
import BarLine from "../../img/new/bar-line.png";
import UpDown from "../../img/new/up-down.png";
import PriceDown from "../../img/new/price-down.png";
import Lock from "../../img/new/lock.png";
import UserGroup from "../../img/new/user-group.png";
import Gr1 from "../../img/new/gr1.png";
import Gr2 from "../../img/new/gr2.png";
import Gr3 from "../../img/new/gr3.png";
import OptiImg from "../../img/new/opri.png";
import Pbutton from "../../img/new/pbutton.png";
import Av1 from "../../img/new/av1.png";
import Av2 from "../../img/new/av2.png";
import Av3 from "../../img/new/av3.png";
import Eco1 from "../../img/new/ec1.png";
import Pr1 from "../../img/new/pr1.png";
import Pr2 from "../../img/new/pr2.png";
import Pr3 from "../../img/new/pr3.png";
import Pr4 from "../../img/new/pr4.png";
import Pr5 from "../../img/new/pr5.png";
import Pr6 from "../../img/new/pr6.png";
import Pr7 from "../../img/new/pr7.png";
import Pr8 from "../../img/new/pr8.png";
import Pr9 from "../../img/new/pr9.png";
import Pr10 from "../../img/new/pr10.png";
import Pr11 from "../../img/new/pr11.png";
import Pr12 from "../../img/new/pr12.png";
import Pr13 from "../../img/new/pr13.png";
import Pr14 from "../../img/new/pr14.png";
import Pr15 from "../../img/new/pr15.png";
import Pr16 from "../../img/new/pr16.png";
import Pr17 from "../../img/new/pr17.png";
import Pr18 from "../../img/new/pr18.png";
import Pr19 from "../../img/new/pr19.png";
import So1 from "../../img/new/so1.png";
import So2 from "../../img/new/so2.png";
import So3 from "../../img/new/so3.png";
import So4 from "../../img/new/so4.png";
import Li1 from "../../img/new/li1.png";
import Li2 from "../../img/new/li2.png";
import Li3 from "../../img/new/li3.png";
import Li4 from "../../img/new/li4.png";
import Ri1 from "../../img/new/ri1.png";
import Ri2 from "../../img/new/ri2.png";
import Ri3 from "../../img/new/ri3.png";
import Ri4 from "../../img/new/ri4.png";
import CFooter from "components/NewFooter/Footer";

function LandingPage(props) {
  return (
    <div className="landing-page">
      <div className="main-sec py-75px">
        <div className="bg-icons">
          <img src={Li1} className="li1" />
          <img src={Li2} className="li2" />
          <img src={Li3} className="li3" />
          <img src={Li4} className="li4" />

          <img src={Ri1} className="ri1" />
          <img src={Ri2} className="ri2" />
          <img src={Ri3} className="ri3" />
          <img src={Ri4} className="ri4" />
        </div>
        <div className="container text-center">
          <div className="col-md-12 col-sm-12 col-lg-10 col-lg-7 mx-auto ">
            <h1 className="fw-bold mb-5 f-72">
              Decentralized <br></br>
              <span>Perpetual Exchange</span>
            </h1>
            <p className="f-24 t-gray mb-5">
              Trade BTC, ETH, FTM, OP, ARB and other top cryptocurrencies with up to 100x leverage directly from your
              wallet
            </p>
            <div>
              <button className="start-btn f-16 t-white">Start Trading</button>
            </div>
          </div>
        </div>
      </div>

      <div className="widget-sec py-75px">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <div className="w-220px mb-4 px-3">
              <div className="widget-sec-card text-center">
                <div className="mb-3">
                  <img src={BarLine} className="" alt="Bar Line" />
                </div>
                <div className="f-24 fw-bold mb-3">$1,792,891,828</div>
                <div className="f-16 mb-2 t-gray">Total Trading Volume</div>
              </div>
            </div>
            <div className="w-220px mb-4 px-3">
              <div className="widget-sec-card text-center">
                <div className="mb-3">
                  <img src={Lock} className="" alt="Bar Line" />
                </div>
                <div className="f-24 fw-bold mb-3">$7,024,110</div>
                <div className="f-16 mb-2 t-gray">Total Value Locked</div>
              </div>
            </div>
            <div className="w-220px mb-4 px-3">
              <div className="widget-sec-card text-center">
                <div className="mb-3">
                  <img src={PriceDown} className="" alt="Bar Line" />
                </div>
                <div className="f-24 fw-bold mb-3">$3,324,975</div>
                <div className="f-16 mb-2 t-gray">Total Fees</div>
              </div>
            </div>
            <div className="w-220px mb-4 px-3">
              <div className="widget-sec-card text-center">
                <div className="mb-3">
                  <img src={UpDown} className="" alt="Bar Line" />
                </div>
                <div className="f-24 fw-bold mb-3">$613,497</div>
                <div className="f-16 mb-2 t-gray">Open Interest</div>
              </div>
            </div>
            <div className="w-220px mb-4 px-3">
              <div className="widget-sec-card text-center">
                <div className="mb-3">
                  <img src={UserGroup} className="" alt="Bar Line" />
                </div>
                <div className="f-24 fw-bold mb-3">49,808</div>
                <div className="f-16 mb-2 t-gray">Total Trading Volume</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grade-card-sec py-75px">
        <div className="container">
          <div className="col-md-12 col-lg-10 mx-auto">
            <div className="row">
              <div className="col-md-4 px-3 mb-4">
                <div>
                  <img src={Gr1} className="w-100" />
                </div>
              </div>
              <div className="col-md-4 px-3 mb-4">
                <img src={Gr2} className="w-100" />
              </div>
              <div className="col-md-4 px-3 mb-4">
                <img src={Gr3} className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="breaking-sec py-75px">
        <div className="container">
          <div className="mb-3 f-56 fw-bold text-center">Breaking Boundaries in DEX</div>
          <div className="f-15 mb-5 text-center t-gray">Welcome to the new era of perpetual trading.</div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 px-5">
              <div className="breaking-sec-card">
                <div className="mb-3 f-24 pt-5">Leveraged Trading</div>
                <div className="f-16 t-gray">
                  Innovative trading solution for BTC, ETH, FTM, OP, BNB, LINK, SNX, RDNT, ARB and GMX with up to 100x
                  leverage.
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 px-5">
              <div className="breaking-sec-card">
                <div className="mb-3 f-24 pt-5">Real Yield</div>
                <div className="f-16 t-gray">Stake and mine real income in FTM or ETH.</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 px-5">
              <div className="breaking-sec-card">
                <div className="mb-3 f-24 pt-5">Self-Custody</div>
                <div className="f-16 t-gray">Total control of your funds.</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 px-5">
              <div className="breaking-sec-card">
                <div className="mb-3 f-24 pt-5">Lowest Fees</div>
                <div className="f-16 t-gray">Enter and exit positions with minimal spread and zero price impact.</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 px-5">
              <div className="breaking-sec-card">
                <div className="mb-3 f-24 pt-5">Transparency</div>
                <div className="f-16 t-gray">Fully transparent open-source smart contracts.</div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 px-5">
              <div className="breaking-sec-card">
                <div className="mb-3 f-24 pt-5">User-Friendly</div>
                <div className="f-16 t-gray">Trade effortlessly through a simple interface.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="optimize-sec py-75px">
        <div className="container">
          <div className="row">
            <div className="col-md-8 px-5">
              <div className="mb-3 f-56 fw-bold ">Optimize performance with Mummy Vault</div>
              <div className="f-15 mb-5 t-gray">
                Our cutting-edge auto-compound Yield Farming strategy, designed to empower investors to earn rewards
                effortlessly.
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-6 mb-4">
                  <div className="optimize-sec-card">
                    <div className="row mb-3">
                      <div className="col-4 align-self-center">
                        <div className="text-center">MMY</div>
                      </div>
                      <div className="col-8 text-end">
                        <div className="text-end">
                          <img src={Pbutton} className="h-30" alt="Play button" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <div className="f-16 t-gray  br-gray">
                          APY: <span className="ms-3 f-15 t-red">24.18 %</span>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="f-16 t-gray">
                          Daily: <span className="ms-3 f-15 t-red">0.0353 %</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 mb-4">
                  <div className="optimize-sec-card">
                    <div className="row mb-3">
                      <div className="col-4 align-self-center">
                        <div className="text-center">MMY</div>
                      </div>
                      <div className="col-8 text-end">
                        <div className="text-end">
                          <img src={Pbutton} className="h-30" alt="Play button" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <div className="f-16 t-gray  br-gray">
                          APY: <span className="ms-3 f-15 t-red">24.18 %</span>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="f-16 t-gray">
                          Daily: <span className="ms-3 f-15 t-red">0.0353 %</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 mb-4">
                  <div className="optimize-sec-card">
                    <div className="row mb-3">
                      <div className="col-4 align-self-center">
                        <div className="text-center">MMY</div>
                      </div>
                      <div className="col-8 text-end">
                        <div className="text-end">
                          <img src={Pbutton} className="h-30" alt="Play button" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <div className="f-16 t-gray  br-gray">
                          APY: <span className="ms-3 f-15 t-red">24.18 %</span>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="f-16 t-gray">
                          Daily: <span className="ms-3 f-15 t-red">0.0353 %</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 mb-4">
                  <div className="optimize-sec-card">
                    <div className="row mb-3">
                      <div className="col-4 align-self-center">
                        <div className="text-center">MMY</div>
                      </div>
                      <div className="col-8 text-end">
                        <div className="text-end">
                          <img src={Pbutton} className="h-30" alt="Play button" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-4">
                        <div className="f-16 t-gray  br-gray">
                          APY: <span className="ms-3 f-15 t-red">24.18 %</span>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="f-16 t-gray">
                          Daily: <span className="ms-3 f-15 t-red">0.0353 %</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 px-5 align-self-center">
              <img src={OptiImg} alt="Optimize" className="w-100" />
            </div>
          </div>
        </div>
      </div>

      <div className="available-sec py-75px">
        <div className="container">
          <div className="fw-bold f-36 text-center mb-3">Available on your preferred network</div>
          <div className="f-15 mb-5 t-gray text-center">Mummy is currently live on Fantom, Optimism, and Arbitrum.</div>
          <div className="row pt-5">
            <div className="col-md-12 col-lg-4 px-5">
              <div className="available-sec-card">
                <div className="">
                  <img src={Av1} />
                </div>
                <div className="f-24 mb-3 fw-bold">Fantom</div>
                <div className="mb-4">
                  <div className="mb-2 row">
                    <div className="col-6 t-gray ">Total Volume</div>
                    <div className="col-6">$ 217,657</div>
                  </div>
                  <div className="mb-2 row">
                    <div className="col-6 t-gray ">Total Value Locked</div>
                    <div className="col-6">$ 217,657</div>
                  </div>
                  <div className="mb-2 row">
                    <div className="col-6 t-gray ">Total Fees</div>
                    <div className="col-6">$ 715</div>
                  </div>
                </div>
                <div>
                  <button>Launch App</button>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 px-5">
              <div className="available-sec-card orange-card">
                <div className="">
                  <img src={Av2} />
                </div>
                <div className="f-24 mb-3 fw-bold">Optimism</div>
                <div className="mb-4">
                  <div className="mb-2 row">
                    <div className="col-6 t-gray ">Total Volume</div>
                    <div className="col-6">$ 217,657</div>
                  </div>
                  <div className="mb-2 row">
                    <div className="col-6 t-gray ">Total Value Locked</div>
                    <div className="col-6">$ 217,657</div>
                  </div>
                  <div className="mb-2 row">
                    <div className="col-6 t-gray ">Total Fees</div>
                    <div className="col-6">$ 715</div>
                  </div>
                </div>
                <div>
                  <button>Launch App</button>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 px-5">
              <div className="available-sec-card">
                <div className="">
                  <img src={Av3} />
                </div>
                <div className="f-24 mb-3 fw-bold">Fantom</div>
                <div className="mb-4">
                  <div className="mb-2 row">
                    <div className="col-6 t-gray ">Total Volume</div>
                    <div className="col-6">$ 217,657</div>
                  </div>
                  <div className="mb-2 row">
                    <div className="col-6 t-gray ">Total Value Locked</div>
                    <div className="col-6">$ 217,657</div>
                  </div>
                  <div className="mb-2 row">
                    <div className="col-6 t-gray ">Total Fees</div>
                    <div className="col-6">$ 715</div>
                  </div>
                </div>
                <div>
                  <button>Launch App</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="eco-sec py-75px">
        <div className="container">
          <div className="fw-bold mb-5 f-56 text-center">Ecosystem tokens</div>
          <div className="row">
            <div className="col-md-12 col-lg-6 mb-4 px-5">
              <div className="eco-sec-card">
                <div className="row mb-4">
                  <div className="col-6">
                    <div className="text-center">
                      <div className="f-23">MLB</div>
                      <div className="t-red f-14">$1.2</div>
                    </div>
                  </div>
                  <div className="col-6 align-self-center">
                    <div className="row">
                      <div className="col-6">
                        <button className="read-more-btn">Read More</button>
                      </div>
                      <div className="col-6">
                        <button className="buy-btn">Buy</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="f-16 t-gray mb-3">
                  MLP is the liquidity provider token. Accrues 60% of the platform's generated fees.
                </div>
                <div className="table-design">
                  <div className="table-design-head">
                    <div className="row f-14">
                      <div className="col-2">
                        <img src={Eco1} />
                      </div>
                      <div className="col-3 t-gray align-self-center">Fantom APR:</div>
                      <div className="t-red col-2 align-self-center">211.15%</div>
                    </div>
                  </div>
                  <div className="table-design-body">
                    <div className="row f-14 mb-5">
                      <div className="col-2"></div>
                      <div className="col-3 t-gray align-self-center">Optimism APR:</div>
                      <div className="t-red col-2 align-self-center">211.15%</div>
                    </div>
                    <div className="row f-14">
                      <div className="col-2"></div>
                      <div className="col-3 t-gray align-self-center">Optimism APR:</div>
                      <div className="t-red col-2 align-self-center">211.15%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 mb-4 px-5">
              <div className="eco-sec-card">
                <div className="row mb-4">
                  <div className="col-6">
                    <div className="text-center">
                      <div className="f-23">MLB</div>
                      <div className="t-red f-14">$1.2</div>
                    </div>
                  </div>
                  <div className="col-6 align-self-center">
                    <div className="row">
                      <div className="col-6">
                        <button className="read-more-btn">Read More</button>
                      </div>
                      <div className="col-6">
                        <button className="buy-btn">Buy</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="f-16 t-gray mb-3">
                  MLP is the liquidity provider token. Accrues 60% of the platform's generated fees.
                </div>
                <div className="table-design">
                  <div className="table-design-head">
                    <div className="row f-14">
                      <div className="col-2">
                        <img src={Eco1} />
                      </div>
                      <div className="col-3 t-gray align-self-center">Fantom APR:</div>
                      <div className="t-red col-2 align-self-center">211.15%</div>
                    </div>
                  </div>
                  <div className="table-design-body">
                    <div className="row f-14 mb-5">
                      <div className="col-2"></div>
                      <div className="col-3 t-gray align-self-center">Optimism APR:</div>
                      <div className="t-red col-2 align-self-center">211.15%</div>
                    </div>
                    <div className="row f-14">
                      <div className="col-2"></div>
                      <div className="col-3 t-gray align-self-center">Optimism APR:</div>
                      <div className="t-red col-2 align-self-center">211.15%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="partner-sec py-75px">
        <div className="container text-center">
          <div className="mb-4 f-56">Partners</div>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <div className="w-220px mb-4">
              <img src={Pr1} className="w-100" />
            </div>
            <div className="w-220px mb-4">
              <img src={Pr2} className="w-100" />
            </div>
            <div className="w-220px mb-4">
              <img src={Pr3} className="w-100" />
            </div>
            <div className="w-220px mb-4">
              <img src={Pr4} className="w-100" />
            </div>
            <div className="w-220px mb-4">
              <img src={Pr5} className="w-100" />
            </div>
            <div className="w-220px mb-4">
              <img src={Pr6} className="w-100" />
            </div>
            <div className="w-220px mb-4">
              <img src={Pr7} className="w-100" />
            </div>
            <div className="w-220px mb-4">
              <img src={Pr8} className="w-100" />
            </div>
            <div className="w-220px mb-4">
              <img src={Pr9} className="w-100" />
            </div>
            <div className="w-220px mb-4">
              <img src={Pr10} className="w-100" />
            </div>
            <div className="w-220px mb-4">
              <img src={Pr11} className="w-100" />
            </div>
            <div className="w-220px mb-4">
              <img src={Pr12} className="w-100" />
            </div>
            <div className="w-220px mb-4">
              <img src={Pr13} className="w-100" />
            </div>
            <div className="w-220px mb-4">
              <img src={Pr14} className="w-100" />
            </div>
            <div className="w-220px mb-4">
              <img src={Pr15} className="w-100" />
            </div>
            <div className="w-220px mb-4">
              <img src={Pr16} className="w-100" />
            </div>
            <div className="w-220px mb-4">
              <img src={Pr17} className="w-100" />
            </div>
            <div className="w-220px mb-4">
              <img src={Pr18} className="w-100" />
            </div>
            <div className="w-220px mb-4">
              <img src={Pr19} className="w-100" />
            </div>
            <div className="w-220px mb-4">
              <img src={Pr14} className="w-100" />
            </div>
          </div>
        </div>
      </div>

      <CFooter />
    </div>
  );
}

export default LandingPage;
