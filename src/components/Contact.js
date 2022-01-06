import React, { Component } from "react";
import PropTypes from "prop-types";
import BasicModal from "./modal";



class Contact extends Component {
  
  state = { showing: false, text: "View", disabled : false};
  
  
  changeText = (text) => {
  
    this.setState({ text }); 
  }
  render() {
    const { name, email, phone, website} = this.props;
    const { showing } = this.state;
    const { text } = this.state;
    

    return (
      <div className="card card-body mb-3">
        <div class="row">
          <div class="col-md-4">
            <h4>{name}</h4>
          </div>
          <div class="col-md-3">
            <p>Phone: {phone}</p>
          </div>
          <div class="col-md-1">
            <button class="btn btn-primary btn-sm" onClick={() => {this.setState({ showing: true, disabled : true});this.changeText("Info")} }>{text}</button>
          </div>
          <div class="col-md-4" id="info">
            { showing 
                    ? <div onClick={() => {this.setState({showing: false});this.changeText("View")} }>Email: {email} <br></br> Website: {website}</div>
                    : null
                }
          </div>

        </div>
      </div>
    );
  }
}


Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default Contact;
