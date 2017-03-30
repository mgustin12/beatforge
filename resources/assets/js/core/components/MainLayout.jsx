import React, { Component } from 'react';

import Navbar from './Navbar.jsx';

class MainLayout extends Component {

  render() {
    return (
      <div className="page">
        <Navbar />
        <div className="view">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MainLayout;