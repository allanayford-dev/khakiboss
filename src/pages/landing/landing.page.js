import React, { Component } from 'react'
import Styled from 'styled-components';
import background from '../../assets/images/background.jfif';

import Login from '../../components/login/login.component';

const Styles = Styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: url(${background});
`;

export default class LandingPage extends Component {
    render() {
        return (
            <Styles>
                <Login />
            </Styles>
        )
    }
}
