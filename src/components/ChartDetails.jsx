import { Component } from "react";

export class ChartDetails extends Component {
  render() {
    return (
      <div className="card-body ">
        <h6
          className="card-title"
          style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}
        >
          {" "}
          {this.props.name}{" "}
        </h6>
        <p
          className="card-text fw-bold "
          style={{
            fontFamily: "NHaasGroteskDSPro-65Md",
            color: "rgb(255, 255, 255)",
            fontSize: "small",
          }}
        >
          $ {this.props.val}
        </p>
      </div>
    );
  }
}

export default ChartDetails;
