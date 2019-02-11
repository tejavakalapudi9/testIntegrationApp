import React from 'react';
import BBLogo from '../assets/Logo.png';
import GoogleLoginButton from '../assets/Google_signin_button/btn_google_signin_light_pressed_web.png';

const LoginWidget = () => (
  <div className="login__container">
    <div>
      <img src={BBLogo} className="login__logo" />
    </div>
    <input
      type="image"
      src={GoogleLoginButton}
      alt="Sign in with Google"
      className="login__gmail-button"
    />
    <div>OR</div>
    <form>
      <div className="form-group">
        <input
          type="text"
          className="form-control login__input"
          placeholder="First Name"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control login__input"
          placeholder="Last Name"
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control login__input"
          placeholder="Email"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control login__input"
          placeholder="Password"
        />
      </div>
    </form>
    <button
      type="button"
      className="btn btn-success btn-lg btn-block login__button"
    >
      Create Account
    </button>
    <div className="row justify-content-center">
      <div className="col-10 login__terms">
        By creating a BeatBiz account, you agree to our Terms of Service and
        Privacy Policy.
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-10">
        <hr className="login__ruler" />
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-10">
        Already have an account? <a className="login__anchor">Sign in</a>
      </div>
    </div>
  </div>
);

export default LoginWidget;
