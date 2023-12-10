// Statistics.tsx
import React from 'react';

interface ProfileStatisticsProps {
  pr_scores: number;
}

const ProfileStatistics: React.FC<ProfileStatisticsProps> = ({ pr_scores}) => {
  return (
    <div className="profile-statistics">
      <div className="profile-statistics-stat">
        <span className="profile-statistics-stat-label">Current PR score: </span>
        <span className="profile-statistics-stat-score">{pr_scores}</span>
      </div>
    </div>
  );
};

export default ProfileStatistics;