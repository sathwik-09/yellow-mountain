import React from 'react';
import { SocialIcon } from 'react-social-icons'


export default function Icons() {
  return (
    <div className='flex space-x-3 justify-end pr-10'>  
      <SocialIcon url="https://twitter.com" href='https://www.linkedin.com/company/amentcapital/' />
      <SocialIcon url="https://www.facebook.com" href='https://www.linkedin.com/company/amentcapital/' />
      <SocialIcon url="https://www.instagram.com" href='https://www.linkedin.com/company/amentcapital/' />
      <SocialIcon url="https://www.linkedin.com/company/amentcapital/" />
    </div>
  );
}