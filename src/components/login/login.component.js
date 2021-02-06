import React, { Component } from 'react';
import Styled from 'styled-components';
import SquareBox from '../../layouts/squarebox/squarebox.layout';

const Styles = Styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 300px;
  height: 300px;
  background: rgba(245,245,245,0.3);
  box-sizing: border-box;
  box-shadow: 0 15px 25px 15px rgba(0,0,0,0.3);
  border-radius: 10px;

  .login-form {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }

  .login-header {
    margin-block-start: 0;
    margin-block-end: 0;
    margin: 10px 0 30px;
    color: rgb(245,245,245,1);
    text-align: center;
    font-size: 30px;
    padding: 10px 0;
  }

  .input-group {
    position: relative;
  }

  .input-group input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 25px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent; 
  }

  .input-group label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    pointer-events: none;
    transition: .5s;
  }

  .input-group input:focus ~ label,
  .input-group input:valid ~ label {
    top: -25px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
  }

  .login-button {
    padding: 10px 20px;
    color: #03e9f4;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    margin-top: 10px;
    letter-spacing: 4px;
    background: none;
  }

  .login-button:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 15px #03e9f4, 0 0 30px #03e9f4, 0 0 50px #03e9f4;
  }
`;

export default class Login extends Component {
  render() {
    return (
      <Styles>
          <form className="login-form">
            <h2 className="login-header">Login</h2>
            <div className="input-group">
              <input type="text" name="" required="" />
              <label>Username or Email Address</label>
            </div>
            <div className="input-group">
              <input type="password" name="" required="" />
              <label>Password</label>
            </div>
            <button className="login-button">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </button>
          </form>
      </Styles>
    )
  }
}
