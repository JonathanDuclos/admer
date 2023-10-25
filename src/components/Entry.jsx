import React from 'react';
import { FiTrash } from 'react-icons/fi';
import { accountsPlaneSheet } from '../data/dummy';

const Entry = ({entry}) => {
    return(
        <div className='flex title text-sm m-2 bg-slate-300 rounded-md pt-1'>
            <div className='bg-red-500 rounded-full p-1 mx-1 mb-1 hover:scale-125'>
                <FiTrash className='flex self-center' onClick={() => console.log(entry.key, " Closed")}/>
            </div>
            <p className=' ml-3'> Codigo: </p> <p className='font-bold'> {entry.code} </p>
            <p className=' ml-3'> Tipo:</p> <p className={`${getEntryTypeFeatures(entry.code)[1]} font-bold`}> { getEntryTypeFeatures(entry.code)[0] } </p>
            <p className=' ml-3'> Conta: </p> <p className={`${getEntryTypeFeatures(entry.code)[3]} font-bold`}> { getEntryTypeFeatures(entry.code)[2] } </p>
            <p className=' ml-3'> Valor: </p> <p className='font-bold text-cyan-500'>R$ {entry.value} </p>
        </div>
    );
}

function getEntryTypeFeatures(entry){
    let ret = []
    let orangeColor = "text-orange-500";
    switch(entry.charAt(0)){
        case '1': 
            ret.push("Ativo", "text-green-500");
            for(const [index, element] of accountsPlaneSheet.ativo.entries()){
                if(element.code === entry) ret.push(element.account, orangeColor)
            }
            return ret;
        case '2': 
            ret.push("Passivo", "text-red-500");
            for(const [index, element] of accountsPlaneSheet.passivo.entries()){
                if(element.code === entry) ret.push(element.account, orangeColor)
            }
            return ret;
        case '3':
            ret.push("Resultado", "text-amber-500");
            for(const [index, element] of accountsPlaneSheet.resultado.entries()){
                if(element.code === entry) ret.push(element.account, orangeColor)
            }
            return ret;
        default:  return "None";
    }
}

export default Entry;