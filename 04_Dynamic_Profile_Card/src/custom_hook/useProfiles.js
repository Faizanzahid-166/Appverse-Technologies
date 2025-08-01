import { useEffect, useState } from 'react';

const useProfiles = (initialUsers = []) => {
  const [profiles, setProfiles] = useState(initialUsers);

  // Toggle follow/unfollow for each profile card
  const toggleFollow = (id) => {
    setProfiles((prev) =>
      prev.map((profile) =>
        profile.id === id
          ? { ...profile, isFollowed: !profile.isFollowed }
          : profile
      )
    );
  };

  // Log follow status changes console
  useEffect(() => {
    console.log(
      'Followed users:',
      profiles.filter((p) => p.isFollowed).map((p) => p.name)
    );
  }, [profiles]);

  return { profiles, toggleFollow, setProfiles };
};

export default useProfiles;
