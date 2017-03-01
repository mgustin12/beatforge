import React, { Component } from 'react';

class MainLayout extends Component {

  render() {
    return (
      <div className="page">
        <h1>Hello World!</h1>
        <div className="view-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MainLayout;