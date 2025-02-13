import { Component } from "react";
import Charts from "./Charts";
import ChartButtons from "./ChartButtons";
import ChartDetails from "./ChartDetails";

export class ChartSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Price: {
        options: {
          selection: 365,
        },
        series: [
          {
            name: "Market Price",
            data: [[1645837250522, 39804.53519937617]],
          },
        ],
      },
      Market_Cap: {
        series: [
          {
            name: "Market Cap (USD)",
            data: [[1645837250522, 39804.53519937617]],
          },
        ],
      },
      Tot_Vol: {
        series: [
          {
            name: "Market Volume",
            data: [[1645837250522, 39804.53519937617]],
          },
        ],
      },
    };
    this.prevSelection = this.state.Price.options.selection;
  }
  prevId = this.props.Id;

  fetchData = async () => {
    let chartData = await fetch(
      "https://api.coingecko.com/api/v3/coins/" +
        this.props.Id +
        "/market_chart?vs_currency=usd&days=" +
        this.state.Price.options.selection
    );
    let jsonChartData = await chartData.json();
    this.setState({
      Price: {
        options: this.state.Price.options,
        series: [{ name: "Market Price", data: jsonChartData.prices }],
      },
    });
    this.setState({
      Market_Cap: {
        series: [{ name: "Market Cap", data: jsonChartData.market_caps }],
      },
    });
    this.setState({
      Tot_Vol: {
        series: [{ name: "Market Volume", data: jsonChartData.total_volumes }],
      },
    });
  };

  handleSubmit = (event) => {
    this.setState({
      Price: {
        options: { selection: event.target.value },
        series: this.state.Price.series,
      },
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {
    if (this.prevId !== this.props.Id) {
      this.prevId = this.props.Id;
      this.fetchData();
    }
    if (this.prevSelection !== this.state.Price.options.selection) {
      this.prevSelection = this.state.Price.options.selection;
      this.fetchData();
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col" style={{ maxWidth: "610px" }}>
              <div id="chart">
                <div className="toolbar">
                  <ChartButtons handleSubmit={this.handleSubmit} />
                </div>
                <Charts
                  series={this.state.Price.series}
                  color={"#fcdf03"}
                  type="area"
                  height="400"
                  width="600"
                />
              </div>
            </div>
            <div className="col" style={{ maxWidth: "200px" }}>
              <ChartDetails name={"Market Cap"} val={this.props.MarketCap} />
              <ChartDetails
                name={"Price Change 24hrs"}
                val={this.props.priceChange24}
              />
              <ChartDetails name={"Total Volume"} val={this.props.TotVol} />
              <ChartDetails
                name={"Circulating Supply"}
                val={this.props.Circulating}
              />
              <ChartDetails
                name={"Twitter Followers"}
                val={this.props.twitterF}
              />
            </div>
            <div className="col" style={{ maxWidth: "310px" }}>
              <div>
                {/* market cap chart */}
                <Charts
                  series={this.state.Market_Cap.series}
                  color={"#ff69f5"}
                  type="line"
                  height="200"
                  width="300"
                />
              </div>
              <div>
                {/* volume chart */}
                <Charts
                  color={"#00ffea"}
                  series={this.state.Tot_Vol.series}
                  type="line"
                  height="200"
                  width="300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChartSection;
