import React, { Component } from 'react'
import Styled from 'styled-components';
import background from '../../assets/images/background.jfif';

const Styles = Styled.div`
    width: 100%;
    height: 100vh;
    background: url(${background});
`;

export default class LandingPage extends Component {
    render() {
        return (
            <Styles>
                
            </Styles>
        )
    }
}
