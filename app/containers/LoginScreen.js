// @flow
import React, { Component } from 'react';
import LoginWidget from '../components/LoginWidget';
import MacFrameImage from '../assets/Loginscreen/mac-computer-screen.png';
import MacFrameImage2X from '../assets/Loginscreen/mac-computer-screen@2x.png';

type Props = {};

export default class LoginScreen extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className="container" style={{ height: '100%' }}>
        <div
          className="row justify-content-around align-items-center"
          style={{ height: '100%' }}
        >
          <div className="col-5">
            <LoginWidget />
          </div>
          <div className="col-5">
            <img
              src={MacFrameImage}
              srcSet={`${MacFrameImage} 1x, ${MacFrameImage2X} 2x`}
              className="mac__template"
            />
          </div>
        </div>
      </div>
    );
  }
}
