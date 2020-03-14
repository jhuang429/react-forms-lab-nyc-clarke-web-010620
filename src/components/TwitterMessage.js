import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {message: ""};
  }

  handleOnChange = (str) => {
    this.setState({
      message: str
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={(e) => this.handleOnChange(e.target.value)}/>
        {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
