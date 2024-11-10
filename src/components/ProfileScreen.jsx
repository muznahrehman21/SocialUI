import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import Page1 from './Page1';
import Page2 from './Page2';
const ProfileScreen = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [page, setPage] = useState('ProfileScreen');
  const renderScreen = () => {
    switch (setPage) {
      case 'page1':
        return <Page1 />
      case 'page2':
        return <Page2 />
        default:
          return <ProfileScreen/>
    }

  }
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-24 h-24 border-2 border-gray-400 rounded-full flex items-center justify-center overflow-hidden mb-10 bg-gray-200">

        <div className="w-full h-full flex items-center justify-center text-gray-500">
          <span>No Image</span>
        </div>


        <button
          className="absolute bottom-0 right-0 bg-white rounded-full p-2 border border-gray-300"
          onClick={() => setShowOptions((prev) => !prev)}
        >
          <FaCamera className="text-gray-600" />
        </button>


        {showOptions && (
          <div className="absolute top-0 right-0 mt-12 z-50 bg-red-200 border border-red-500 rounded-md shadow-lg p-2 w-32">
            <button
              className="text-gray-700 block px-3 py-1 text-sm hover:bg-gray-100 w-full text-left"
              onClick={() => {
                console.log("Add Photo Clicked");
                setShowOptions(false);
              }}
            >
              Add Photo
            </button>
            <button
              className="text-gray-700 block px-3 py-1 text-sm hover:bg-gray-100 w-full text-left"
              onClick={() => {
                console.log("Remove Photo Clicked");
                setShowOptions(false);
              }}
            >
              Remove Photo
            </button>
          </div>
        )}
      </div>


      <button className="text-2xl mb-5 w-10 h-10 rounded-full border-2 bg-blue-400 border-blue-400 items-center">+</button>
      <div className="flex gap-3 mb-5">
        <button className="p-2 rounded-md h-15 border-2 bg-blue-400 border-blue-400" onClick={() => {
          console.log('page 1')
          setPage('page1')
        }}>1st Page</button>
        <button className="p-2 rounded-md h-15 border-2 bg-blue-400 border-blue-400">2nd Page</button>
      </div>
      <div className="flex flex-col items-center text-center">
        <p className="border-2 border-gray-400 p-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere quis corrupti totam excepturi nostrum neque, labore quas harum a mollitia consectetur incidunt voluptatem illo, sed, explicabo ducimus recusandae quibusdam iusto sunt eveniet ullam?
        </p>
      </div>
      
    </div>
  );
};

export default ProfileScreen;
