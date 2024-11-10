import { useState } from 'react'

import FeedScreen from './components/FeedScreen.jsx';
import FriendRequestScreen from './components/FriendRequestScreen.jsx';
import ProfileScreen from './components/ProfileScreen.jsx';
import Page1 from './components/Page1.jsx';
function App() {
  const [activeScreen, setActiveScreen] = useState('profile')
  const renderScreen = () => {
    switch (activeScreen) {
      case 'profile':
        return <ProfileScreen />;
      case 'feed':
        return <FeedScreen />;
      case 'friendRequests':
        return <FriendRequestScreen />;
        case '1stpage':
          return <Page1/>
      default:
        return <ProfileScreen />
    }
  };

  return (
    <>
      <div className=' text-center '>
        
        <header className='flex justify-around p-3 border-b-2 border-solid border-gray-400'>
          <button className='bg-none border-none cursor-pointer text-lg  hover:bg-gray-100 focus:bg-blue-500 rounded-3xl' onClick={()=> setActiveScreen('profile')}>👤</button>
          <button className='bg-none border-none cursor-pointer text-lg  hover:bg-gray-100 focus:bg-blue-500 rounded-3xl' onClick={()=> setActiveScreen('feed')}>🏠</button>
          <button className='bg-none border-none cursor-pointer text-lg  hover:bg-gray-100 focus:bg-blue-500 rounded-3xl' onClick={()=> setActiveScreen('friendRequests')}>🫱🏻‍🫲🏻</button>
        </header>
        <main className='p-5'>{renderScreen()}</main>
      </div>
    </>
  )
}

export default App
