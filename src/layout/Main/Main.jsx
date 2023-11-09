import { Outlet } from 'react-router-dom';
import SharedFooter from '../../pages/Shared/SharedFooter/SharedFooter';
import Navbar from '../../pages/Shared/SharedHeader/Navbar/Navbar';

const Main = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <Navbar></Navbar>
            <Outlet/>
            <SharedFooter/>
        </div>
    );
};

export default Main;