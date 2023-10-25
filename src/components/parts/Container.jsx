import React from 'react'
import { Outlet } from 'react-router-dom';
import { useStateContext } from '../context/Context';
import Menu from './Menu/Menu';

const Container = () => {
    const { openedMenu } = useStateContext()
    return (
        <div className="block m-auto mt-3 h-screen">
            { openedMenu ? <Menu/> : ""}
            <div className='block'>
                <Outlet/>
            </div>
        </div>
    )
}

export default Container;