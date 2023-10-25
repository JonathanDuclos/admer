import React from 'react'

const OptionBlock = ({text, size, icon, link}) => {
  return (
    <div className="bg-slate-50 m-2 p-2 w-1/5 grid justify-items-center">
        <button className="flex bg-slate-200 rounded-md p-2">
          <div className='p-1 self-center'>
            {icon}
          </div>
          <a href={`/${link}`} className='hidden md:block self-center'>{text}</a>
        </button>
    </div>
  );
}

export default OptionBlock;