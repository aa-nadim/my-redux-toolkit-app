import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

import Login from './components/Login';
import Logout from './components/Logout';


const App = () => {
    const user = useSelector(selectUser);

    return (
        <div>
            {
                user ? <Logout /> : <Login />
            }
        </div>
    );
};

export default App;