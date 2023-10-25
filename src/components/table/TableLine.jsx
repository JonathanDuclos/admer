import React from 'react'

const abstractIcon = (v) => {
  if(!v) return (<div className="bg-green-500 rounded-full w-4 h-4"/>)
  else return (<div className="bg-red-500 rounded-full w-4 h-4"/>)
}

const TableLine = ({tableData}) => {
  return (
    <>
    {
      tableData.map(i => 
        <tr key={i.code} className='opacity-80 even:bg-slate-50 odd:bg-slate-200'>
          <td className='text-left'>{i.code}</td>
          <td className='text-left'>{i.account}</td>
          <td className='text-left'>
            {abstractIcon(i.abstract)}
          </td>
        </tr>
      )
    }
    </>
  )
}

export default TableLine