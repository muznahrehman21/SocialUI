import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import FeedScreen from './components/FeedScreen';
import FriendRequestScreen from './components/FriendRequestScreen';
import ProfileScreen from './components/ProfileScreen';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

function App() {
  return (
    <Router>
      <div className="text-center">
        <header className="flex justify-around p-3 border-b-2 border-solid border-gray-400">
          
          <Link to="/">
            <button className="bg-none border-none cursor-pointer text-lg hover:bg-gray-100 focus:bg-blue-500 rounded-3xl">
              👤
            </button>
          </Link>
          <Link to="/feed">
            <button className="bg-none border-none cursor-pointer text-lg hover:bg-gray-100 focus:bg-blue-500 rounded-3xl">
              🏠
            </button>
          </Link>
          <Link to="/friend-requests">
            <button className="bg-none border-none cursor-pointer text-lg hover:bg-gray-100 focus:bg-blue-500 rounded-3xl">
             🤝🏻
            </button>
          </Link>
        </header>

        <main className="p-5">
       
          <Routes>
            <Route path="/" element={<ProfileScreen />} />
            <Route path="/feed" element={<FeedScreen />} />
            <Route path="/friend-requests" element={<FriendRequestScreen />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
