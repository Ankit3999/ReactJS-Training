import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';

function App() {
    const [userName, setUserName] = useState('');
    const [userList, setUserList] = useState([]);

    const handleInputChange = (event) => {
        setUserName(event.target.value);
    };

    const handleAddUser = () => {
        setUserList([...userList, userName]);
        setUserName('');
    };

    return (
        <div>
            <h1>Hello World</h1>
            <input type="text" value={userName} onChange={handleInputChange} />
            <button onClick={handleAddUser}>Add</button>
            <div>
                <h2>User List</h2>
                <ul>
                    {userList.map((user, index) => (
                        <li key={index}>{user}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

createRoot(document.getElementById('root')).render(<App />);