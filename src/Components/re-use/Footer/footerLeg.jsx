import React from 'react';
import FooterItem from './footerItem';
import Company from './company';
import Contact from './contact';
import Links from './links';
import Location from './location';

export default function FooterLeg() {
  return (
    <>
    <div className="footer-leg">
        <FooterItem title='Company'>
            <Company />
        </FooterItem>

        <FooterItem title='Contacts'>
            <Contact />
        </FooterItem>

        <FooterItem title='Website Links'>
            <Links />
        </FooterItem>

        <FooterItem title='Location'>
            <Location />
        </FooterItem>
    </div>
</>
  )
}
