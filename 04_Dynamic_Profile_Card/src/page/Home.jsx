import React,{useState} from 'react'
import ProfileCard from '../component/ProfileCard.jsx'//profile card
import usersData  from '../data/userinfo.js'//profile user data
import useProfiles from '../custom_hook/useProfiles.js'

function Home({ darkMode }) {


  const { profiles, toggleFollow } = useProfiles(usersData);
  const [searchTerm, setSearchTerm] = useState('');

  //search profile logic
   const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex justify-between items-center">

          {/* search Bar Input */}
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-2 rounded-xl border bg-gray-800 border-gray-600 text-white"
          />

        </div>

        {/* User Profiles */}
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((user) => (
            <ProfileCard
              key={user.id}
              name={user.name}
              bio={user.bio}
              experience={user.experience}
              avatar={user.avatar}
              isFollowed={user.isFollowed}
              toggleFollow={() => toggleFollow(user.id)}
              bgColor="bg-gray-400"
              darkMode={darkMode}
            />
          ))
        ) : (
          <p className="text-center font-bold">No users found.</p>
        )}
      </div>
  )
}

export default Home
