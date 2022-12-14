import React from 'react';
const UserProfile: React.FC<{ userName: string | null }> = ({ userName }) => {
  if (userName) {
    userName = userName.charAt(0).toUpperCase() + userName.slice(1);
    if (userName.length > 7) {
      userName = userName.substring(0, 7) + '..';
    }
  }

  return (
    <div className="cursor-default flex items-center rounded-xl transition-opacity transition-duration: 150ms w-34 sm:w-36 md:w-38">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9 md:h-10 md:w-10 text-gray-400"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
          clipRule="evenodd"
        />
      </svg>
      <h4 className="text-sm sm:text-base ml-0 sm:ml-1 text-gray-900">
        {' '}
        {userName ? `Hi, ${userName}` : ''}
      </h4>
    </div>
  );
};
export default React.memo(UserProfile);
