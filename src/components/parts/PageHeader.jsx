import React from 'react'
import _layout from '../../pages/layout/_layout.css';
import { CiMenuKebab } from 'react-icons/ci';
import { useStateContext } from '../context/Context';

/** It need to be replaced by react-planet **/

const PageHeader = ({text}) => {
  const {openedMenu, setOpenedMenu} = useStateContext()
  
  return (
    <div className="flex justify-between bg-slate-50 w-auto mb-3 p-3 shadow-md">
        <div className="">
            <p className='font-bold text-xl title'>{text}</p>
        </div>
        <div className='flex gap-3 align-baseline'>
          <CiMenuKebab onClick={() => setOpenedMenu(!openedMenu)}/>
        </div>
    </div>
  );
}

export default PageHeader;