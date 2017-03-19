import React, { Component } from 'react';

import Header from './shared/Header.jsx';

class MainLayout extends Component {

  render() {
    return (
      <div className="page">
        <Header />
        <div className="view">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MainLayout;