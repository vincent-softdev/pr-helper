import React from 'react';

interface ProfileAboutProps {
  bio: string;
}

const ProfileAbout: React.FC<ProfileAboutProps> = ({ bio }) => {
  return (
    <div className="about">
      <h3>About Me</h3>
      <p className='about-bio'>{bio}</p>
      <p>PR profile information - just for testing only</p>
    </div>
  );
};

export default ProfileAbout;
