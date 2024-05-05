import { Link, Outlet } from 'react-router-dom';
import Category from './Category'
function AllCollapseExample() {
    return (
        <>
        <div className='flex'>
            <div>
                <Category/>
            </div>
            <div >
                <Outlet/>
            </div>
        </div>
        
        </>

        
    );
}

export default AllCollapseExample;