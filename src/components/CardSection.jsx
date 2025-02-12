import React, { Component } from "react";
import Card from "./Card";

export class CardSection extends Component {
  render() {
    return (
      <div>
        <div
          className="fs-1 fw-bold m-3 text-Capitalize"
          style={{
            fontFamily: "NHaasGroteskDSPro-65Md",
            marginTop: "3px !important",
            marginBottom: "0px !important",
          }}
        >
          {this.props.coinName}
        </div>
        <section
          className="row m-5 mb-0"
          style={{ marginTop: " 2px !important" }}
        >
          <Card
            val={`${this.props.mCap24} %`}
            title={"Market Cap 24Hrs"}
            col={"#fcdf03"}
          />
          <Card
            val={`$${this.props.ath}`}
            title={"All Time High"}
            col={"#fcdf03"}
          />
          <Card
            val={`$${this.props.atl}`}
            title={"All Time Low"}
            col={"#fcdf03"}
          />
          <Card
            val={`${this.props.sentiment} %`}
            title={"Positive Sentiments "}
            col={"#fcdf03"}
          />
          <Card
            val={`$${this.props.high24}`}
            title={"High 24Hrs"}
            col={"rgb(51, 255, 0)"}
          />
          <Card
            val={`$${this.props.low24}`}
            title={"Low 24Hrs"}
            col={"rgb(255, 32, 32)"}
          />
        </section>
        <div>
          <div
            className="text-white text-center"
            style={{
              fontFamily: "NHaasGroteskDSPro-65Md",
              overflow: "visible",
              height: "2px",
              marginTop: "1%",
            }}
          >
            {" "}
            Current Price
          </div>
          <div
            style={{
              fontFamily: "NHaasGroteskDSPro-65Md",
              fontSize: "90px",
              fontWeight: "700",
              color: "#fcdf03",
              textDecoration: "none solid rgb(255, 255, 255)",
              textAlign: "center",
            }}
          >
            ${this.props.currentPrice}
          </div>
        </div>
      </div>
    );
  }
}

export default CardSection;
