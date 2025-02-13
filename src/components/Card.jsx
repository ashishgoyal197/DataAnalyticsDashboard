import { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <div
        className="card text-white text-center  m-3"
        style={{
          width: "11rem",
          backgroundColor: "rgb(43, 43, 43)",
          marginTop: "0px !important",
        }}
      >
        <div className="card-body">
          <h6
            className="card-title"
            style={{ fontFamily: "NHaasGroteskDSPro-65Md" }}
          >
            {this.props.title}
          </h6>
          <p
            className="card-text fw-bold fs-5"
            style={{ color: `${this.props.col}` }}
          >
            {this.props.val}
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
