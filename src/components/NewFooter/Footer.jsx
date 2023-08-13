import React from "react";
import "./footer.scss";
import So1 from "../../img/new/so1.png";
import So2 from "../../img/new/so2.png";
import So3 from "../../img/new/so3.png";
import So4 from "../../img/new/so4.png";

function CFooter(props) {
  return (
    <div className="mum-footer text-center">
      <div className="f-16 mb-3">Join our community</div>
      <div className="d-flex gap-5 justify-content-center">
        <div>
          <img src={So1} />
        </div>
        <div>
          <img src={So2} />
        </div>
        <div>
          <img src={So3} />
        </div>
        <div>
          <img src={So4} />
        </div>
      </div>
    </div>
  );
}

export default CFooter;
