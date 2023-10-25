import React from 'react';
import { FiTrash } from 'react-icons/fi';
import { accountsPlaneSheet } from '../data/dummy';

const Entry = ({entry}) => {
    return(
        // <div className='flex title text-sm m-2 bg-slate-300 rounded-md pt-1'>
        //     <div className='bg-red-500 rounded-full p-1 mx-1 mb-1 hover:scale-125'>
        //         <FiTrash className='flex self-center' onClick={() => console.log(entry.key, " Closed")}/>
        //     </div>
        //     <p className=' ml-3'> Codigo: </p> <p className='font-bold'> {entry.code} </p>
        //     <p className=' ml-3'> Tipo:</p> <p className={`${getEntryTypeFeatures(entry.code)[1]} font-bold`}> { getEntryTypeFeatures(entry.code)[0] } </p>
        //     <p className=' ml-3'> Conta: </p> <p className={`${getEntryTypeFeatures(entry.code)[3]} font-bold`}> { getEntryTypeFeatures(entry.code)[2] } </p>
        //     <p className=' ml-3'> Valor: </p> <p className='font-bold text-cyan-500'>R$ {entry.value} </p>
        // </div>
        <div class="flex m-2 rounded-md border border-slate-200 p-2 shadow-lg w-auto">
            <div class="flex items-center mx-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="red" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </div>
            <div class="">
                <div class="flex">
                <span class="flex font-thin text-slate-400 items-center text-xs">Código</span>
                <span class="w-full text-sm font-medium text-gray-500">
                    {entry.code}
                </span>
                </div>
            </div>
            <div class="mx-1">
                <div class="flex gap-1">
                <span class="flex font-thin text-slate-400 items-center text-xs">Tipo</span>
                <span class="text-sm text-green-500 font-medium"> { getEntryTypeFeatures(entry.code)[0] } </span>
                </div>
            </div>
            <div class="mx-1">
                <div class="flex gap-1">
                <span class="flex font-thin text-slate-400 items-center text-xs">Conta</span>
                <span class="text-sm text-orange-500 font-medium uppercase">{ getEntryTypeFeatures(entry.code)[2] }</span>
                </div>
            </div>
            <div class="mx-1">
                <div class="flex gap-1">
                <span class="flex font-thin text-slate-400 items-center text-xs">R$</span>
                <span class="text-sm text-green-500 font-medium uppercase">{ entry.value }</span>
                </div>
            </div>
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