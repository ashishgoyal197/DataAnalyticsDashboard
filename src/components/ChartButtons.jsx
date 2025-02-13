import { Component } from "react";

export class ChartButtons extends Component {
  render() {
    return (
      <div>
        <button id="one_day" value={1} onClick={this.props.handleSubmit}>
          1D
        </button>
        &nbsp;
        <button id="one_day" value={7} onClick={this.props.handleSubmit}>
          1W
        </button>
        &nbsp;
        <button id="one_day" value={30} onClick={this.props.handleSubmit}>
          1M
        </button>
        &nbsp;
        <button id="one_day" value={182} onClick={this.props.handleSubmit}>
          6M
        </button>
        &nbsp;
        <button id="one_day" value={365} onClick={this.props.handleSubmit}>
          1Y
        </button>
      </div>
    );
  }
}

export default ChartButtons;
