import React, { Component } from "react";

class FormPhone extends Component {
  constructor() {
    super();
    this.state = {
      phone: "",
      isValid: false,
      message: "",
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ phone: e.target.value });
  }

  phoneValidation() {
    const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    return !(!this.state.phone || regex.test(this.state.phone) === false);
  }

  onSubmit() {
    const isPhoneValid = this.phoneValidation();
    this.setState(
      {
        isValid: isPhoneValid,
        message: isPhoneValid
          ? "Phone Number is Valid!"
          : "Phone Number not Valid! 6758",
      },
      () => this.props.onPhoneSubmit(this.state)
    );
  }

  render() {
    const messageTemplate = this.state.message ? (
      <div>{this.state.message}</div>
    ) : (
      ""
    );

    return (
      <div className="phoneValidation">
        <div className="container">
          <label className="label">
            <strong>Phone</strong>
          </label>
          <input
            className="inputPhone"
            type="phone"
            name="phone"
            value={this.state.phone}
            onChange={this.onChange}
          />
          <button className="btn" type="submit" onClick={() => this.onSubmit()}>
            Submit
          </button>
        </div>
        <br />
        <div className="msg">{messageTemplate}</div>
      </div>
    );
  }
}

export default FormPhone;
