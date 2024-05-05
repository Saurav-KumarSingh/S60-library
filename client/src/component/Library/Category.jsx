import Accordion from 'react-bootstrap/Accordion';
import { Link, Outlet } from 'react-router-dom';
function AllCollapseExample() {
    return (<Accordion className='w-[35vw]'>
        <Accordion.Item eventKey="0">
            <Accordion.Header>Syllabus</Accordion.Header>
            <Accordion.Body className='flex row-cols-2  flex-wrap'>
                <Link to='/library/syllabus' download className='p-2 w-[50px] text-orange-400  my-1  text-center'>Syllabus</Link>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>LORDS</Accordion.Header>
            <Accordion.Body className='flex row-cols-2  flex-wrap'>
                <Link to='/library/LORDS/sem-3' className='p-2 w-[50px] text-orange-400 my-1  text-center'>sem 3</Link>
                <Link to='/library/LORDS/sem-4' className='p-2 w-[50px] text-orange-400 my-1  text-center'>sem 4</Link>
                <Link to='/library/LORDS/sem-5' className='p-2 w-[50px] text-orange-400 my-1  text-center'>sem 5</Link>
                
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>PYQ</Accordion.Header>
            <Accordion.Body className='flex row-cols-2  flex-wrap'>
                
                <Link to='/library/PYQ/sem-3' download className='p-2 w-[50px] text-orange-400 my-1  text-center'>sem 3</Link>
                <Link to='/library/PYQ/sem-4' className='p-2 w-[50px] text-orange-400 my-1  text-center'>sem 4</Link>
                <Link to='/library/PYQ/sem-5' className='p-2 w-[50px] text-orange-400 my-1  text-center'>sem 5</Link>
                <Link to='/library/PYQ/sem-6' className='p-2 w-[50px] text-orange-400 my-1  text-center'>sem 6</Link>
                <Link to='/library/PYQ/sem-7/8' className='p-2 w-[50px] text-orange-400 my-1  text-center'>sem 7</Link>
                <Link to='/library/PYQ/sem-7/8' className='p-2 w-[50px] text-orange-400 my-1  text-center'>sem 8</Link>
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
            <Accordion.Header>Road map</Accordion.Header>
            <Accordion.Body className='flex row-cols-2  flex-wrap'>
                <Link to='/library/radmaps' className='p-2 w-[50px] text-orange-400 my-1  text-center'>Road Maps</Link>
                
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
            <Accordion.Header>Technical notes</Accordion.Header>
            <Accordion.Body className='flex row-cols-2  flex-wrap'>
                <Link to='/library/tech-notes' className='p-2 w-[50px] text-orange-400 my-1  text-center'>Notes</Link>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    );
}

export default AllCollapseExample;