
import Profile from './Profile/Profile';
import userData from '../userData.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
const App = () => {
    return (
        <>
            <h2>Profile</h2>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />
            <h2>Friends</h2>
            <FriendList friends={friends} />
            <h2>Transaction History</h2>
            <TransactionHistory items={transactions} />
        </>
    );
};

export default App;