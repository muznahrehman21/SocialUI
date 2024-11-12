import React from 'react';
import '../style/friend.css';

const FriendRequestScreen = () => {
  return (
    <div className="flex flex-col items-center p-5">
      <div className="friend-request-item">
        <p className="request-text">Friend Request from User1</p>
        <button className="button">Accept</button>
        <button className="button">Reject</button>
      </div>

      <div className="friend-request-item">
        <p className="request-text">Friend Request from User2</p>
        <button className="button">Accept</button>
        <button className="button">Reject</button>
      </div>

      <div className="friend-request-item">
        <p className="request-text">Friend Request from User3</p>
        <button className="button">Accept</button>
        <button className="button">Reject</button>
      </div>

      <div className="friend-request-item">
        <p className="request-text">Friend Request from User4</p>
        <button className="button">Accept</button>
        <button className="button">Reject</button>
      </div>

      <div className="friend-request-item">
        <p className="request-text">Friend Request from User5</p>
        <button className="button">Accept</button>
        <button className="button">Reject</button>
      </div>

      <div className="friend-request-item">
        <p className="request-text">Friend Request from User6</p>
        <button className="button">Accept</button>
        <button className="button">Reject</button>
      </div>
    </div>
  );
};

export default FriendRequestScreen;
