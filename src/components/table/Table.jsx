import React from 'react'
import TableHeader from './TableHeader'
import TableLine from './TableLine';

const Table = ({data, title}) => {
  return (
    <div className='w-full bg-slate-200 border-2 rounded-md p-2'>
        <table className='w-full border-collapse'>
          <TableHeader title={title} className="title"/>
          <tbody className=''>
            <TableLine tableData={data}/>
          </tbody>
        </table>
    </div>
  )
}

export default Table