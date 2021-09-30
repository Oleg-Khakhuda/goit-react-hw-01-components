// import logo from './logo.svg';
import './App.css';
import user from './components/Profile/user.json';
import Profile from './components/Profile/Profile';
import statisticalData from './components/Statistics/statistical-data.json'
import Statistics from './components/Statistics/Statistics';
import friends from './components/FriendList/friends.json';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import TransactionHistoryItem from './components/TransactionHistory/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={TransactionHistoryItem} />;
      
    </div>
    )
}