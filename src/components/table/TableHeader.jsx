import React from 'react'

const TableHeader = ({title}) => {
  return (
    <thead className=''>
      <tr className='text-center justify-center'>
        <th className=" text-center text-slate-800">
          {title}
        </th>
      </tr>
      <tr className="justify-center">
        <th className="text-left text-slate-600">Codigo</th>
        <th className="text-left text-slate-600">Conta</th>
        <th className="text-left text-slate-600">Conta Folha</th>
      </tr>
    </thead>
  )
}

export default TableHeader