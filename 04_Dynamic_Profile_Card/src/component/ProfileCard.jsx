import React from 'react';

const ProfileCard = ({ name, bio, avatar, isFollowed, toggleFollow,experience,  bgColor, darkMode }) => {

   const headingTextClass = darkMode ? "text-white" : "text-gray-400";
   const bioTextClass = darkMode ? "text-white" : "text-gray-300";

  return (
    <div className={`bg-gray-800 shadow-md rounded-2xl p-4 flex items-center space-x-4 transition-all ${bgColor} `}>
      <img
        src={avatar}
        alt={name}
        className="w-16 h-16 rounded-full object-cover font-bold border-2 border-gray-500"
      />
      <div className="flex-1">
        <h2 className={`text-lg font-semibold ${headingTextClass}`}>{name}</h2>
        <p className={`text-sm  ${bioTextClass}`}>{bio}</p>
        <p className={`text-sm  ${bioTextClass}`}>{experience} experience</p>
      </div>
      <button
        onClick={toggleFollow}
        className={`px-4 py-2 text-sm rounded-lg font-medium text-white transition-all ${
          isFollowed ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {isFollowed ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
};

export default ProfileCard;
