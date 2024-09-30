import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-20'>
        <Outlet />
      </div>

    </div>
  );
};

export default App;