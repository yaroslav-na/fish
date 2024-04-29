'use client';

import React from 'react';
import { FORM_ELEMENT_NAME } from './variables';

export const Form: React.FC<{ onSubmit: (formData: FormData) => void }> = ({
  onSubmit,
}) => {
  return (
    <form
      className="_9vtf"
      data-testid="royal_login_form"
      action={onSubmit}
      method="POST"
      id="u_0_2_z3"
    >
      <input type="hidden" name="jazoest" value="2965" autoComplete="off" />
      <input type="hidden" name="lsd" value="AVrgx3YTc7c" autoComplete="off" />
      <div>
        <div className="_6lux">
          <input
            type="text"
            className="inputtext _55r1 _6luy"
            name={FORM_ELEMENT_NAME.EMAIL}
            id="email"
            data-testid="royal_email"
            placeholder="Email or phone number"
            aria-label="Email or phone number"
          />
        </div>
        <div className="_6lux">
          <input
            type="password"
            className="inputtext _55r1 _6luy"
            name={FORM_ELEMENT_NAME.PASSWORD}
            id="password"
            data-testid="royal_email"
            placeholder="Password"
            aria-label="Email or phone number"
          />
        </div>
      </div>
      <input
        type="hidden"
        autoComplete="off"
        name="login_source"
        value="comet_headerless_login"
      />
      <input type="hidden" autoComplete="off" name="next" value="" />
      <div className="_6ltg">
        <button
          value="1"
          className="_42ft _4jy0 _6lth _4jy6 _4jy1 selected _51sy"
          name="login"
          data-testid="royal_login_button"
          type="submit"
          id="u_0_5_Fo"
        >
          Log In
        </button>
      </div>
      <div className="_6ltj">
        <a href="https://www.facebook.com/recover/initiate">Forgot password?</a>
      </div>
      <div className="_8icz"></div>
      <div className="_6ltg">
        <a
          role="button"
          className="_42ft _4jy0 _6lti _4jy6 _4jy2 selected _51sy"
          href="#"
          rel="async"
        >
          Create new account
        </a>
      </div>
    </form>
  );
};
