import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        margin: '0 auto',
        backgroundSize: 'cover',
        backgroundPositionX: 'center',
        backgroundImage: 'url("/logo.png")',
        zIndex: 1,
        minHeight: '25rem',
        width: '100%',
        minWidth: '30rem',
        paddingBlock: '0 5rem',
        backgroundColor: 'hsla(0,0%,100%,0.75)',
        backgroundBlendMode: 'overlay',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1>Hi there!</h1>
      <p>Click the button below to login!</p>
      <Button type="button" size="lg" className="copy-btn" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Signin;
