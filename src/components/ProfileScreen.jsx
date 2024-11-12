import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import '../style/profile.css';

const ProfileScreen = () => { 
  const [showOptions, setShowOptions] = useState(false);
  const [page, setPage] = useState('ProfileScreen');
  
  const renderScreen = () => {
    switch (page) {
      case 'page1':
        return <Page1 />
      case 'page2':
        return <Page2 />
      default:
        return <ProfileScreen />
    }
  };

  return (
    <div className="flex flex-col items-center text-center">
      <div className="profile-image-container">
        <div className="no-image-text">
          <span>No Image</span>
        </div>
        <button
          className="camera-button"
          onClick={() => setShowOptions((prev) => !prev)}
        >
          <FaCamera className="camera-icon" />
        </button>

        {showOptions && (
          <div className="options-dropdown">
            <button
              className="options-button"
              onClick={() => {
                console.log("Add Photo Clicked");
                setShowOptions(false);
              }}
            >
              Add Photo
            </button>
            <button
              className="options-button"
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

      <button className="add-button">+</button>
      
      <div className="flex gap-3 mb-5">
        <Link to="/page1">
          <button className="nav-button">1st Page</button>
        </Link>
        <Link to="/page2">
          <button className="nav-button">2nd Page</button>
        </Link>
      </div>

      <div className="flex flex-col items-center text-center">
        <p className="content-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem facere quis corrupti totam excepturi nostrum neque, labore quas harum a mollitia consectetur incidunt voluptatem illo, sed, explicabo ducimus recusandae quibusdam iusto sunt eveniet ullam?
        </p>
      </div>
    </div>
  );
};

export default ProfileScreen;
