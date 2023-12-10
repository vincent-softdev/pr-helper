import React from 'react';

interface ProfileSocialMediaProps {
  twitterUrl: string;
  instagramUrl: string;
  // Add other social media as needed
}

const ProfileSocialMedia: React.FC<ProfileSocialMediaProps> = ({ twitterUrl, instagramUrl }) => {
  return (
    <div className="social-media">
      <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
        {/* Use an appropriate icon here */}
      </a>
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
        {/* Use an appropriate icon here */}
      </a>
    </div>
  );
};

export default ProfileSocialMedia;