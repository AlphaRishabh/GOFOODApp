import React from 'react';
import '../index.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';

export default function Footer() {
  return (
    <div className=" footer">
      <footer className=" border-top">
        <div className=" navbar-dark bg-primary text-center p-5">
          <h5>© 2023 Made by: Rishabh Pandey</h5>
          <div className="icons" style={{ marginTop: '1rem', padding: '0.5rem' }}>
            <LinkedInIcon style={{ fontSize: '3rem', marginRight: '1rem' }} />
            <InstagramIcon style={{ fontSize: '3rem', marginRight: '1rem' }} />
            <MailIcon style={{ fontSize: '3rem', marginRight: '1rem' }} />
          </div>
        </div>
      </footer>
    </div>
  );
}