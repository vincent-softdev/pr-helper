// Header.tsx
import React from 'react';
import ProfileStatistics from './profile_statistic';

interface ProfileHeaderProps {
  backgroundUrl: string;
  profileImageUrl: string;
  prScore: number;
  name: string;
  occupation: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ backgroundUrl, profileImageUrl, name, occupation, prScore }) => {
  return (
    <div className="profile-header" style={{ backgroundImage: `url(${backgroundUrl})` }}>
      <img src={profileImageUrl} alt={`${name}`} className="profile-image" />
      <h1 className="name">{name}</h1>
      <p className="occupation">Jobs: {occupation}</p>
      <ProfileStatistics pr_scores={prScore}/>
    </div>
  );
};

export default ProfileHeader;