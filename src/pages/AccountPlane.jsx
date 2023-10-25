import React from 'react'
import Table from "../components/table/Table"
import { accountPlanePageContent, accountsPlaneSheet } from '../data/dummy'

const AccountPlane = () => {
  return (
    <div>
      <p className='font-bold text-md title'>{accountPlanePageContent.title}</p>
      <div className="block">
        <div className='block md:flex mt-4 gap-1'>
          <Table title={"Ativo"} data={accountsPlaneSheet.ativo}/>
          <Table title={"Passivo"} data={accountsPlaneSheet.passivo}/>
        </div>
        <div className='block md:flex mt-4'>
          <Table title={"Resultado"} data={accountsPlaneSheet.resultado}/>
        </div>
      </div>
    </div>
  )
}

export default AccountPlane