import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className=''>
        <Outlet />
      </div>

    </div>
  );
};

export default App;