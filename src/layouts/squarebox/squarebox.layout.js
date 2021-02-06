import React, { Component } from 'react'
import Styled from 'styled-components';

const Styles = Styled.div`
  
`;

export default class SquareBox extends Component {
  render() {

    const {children} = this.props;

    return (
      <Styles>
        {children}
      </Styles>
    )
  }
}
