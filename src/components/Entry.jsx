import React, {useState} from 'react';
import { accountsPlaneSheet } from '../data/dummy';
import { useStateContext } from './context/Context';

function getAllAccountCodes(){
    var accountCodes = []
    accountsPlaneSheet.ativo.forEach(element => {
        accountCodes.push(element)
    });
    accountsPlaneSheet.passivo.forEach(element => {
        accountCodes.push(element)
    });
    accountsPlaneSheet.resultado.forEach(element => {
        accountCodes.push(element)
    });
    return accountCodes
}

const Entry = ({entry}) => {
    const [selectedAccount, setSelectedAccount] = useState("")
    const {dataEntries, setDataEntries} = useStateContext()

    function handleAccountCodeChange (event) {
        setSelectedAccount(event.target.value)
    }

    function handleEntryDelete(key){
        console.log("Removed: ", key)
        setDataEntries(dataEntries.filter(entry => entry.key !== key))
    }

    return(
        <div className="flex m-2 rounded-md border border-slate-200 p-2 shadow-lg w-auto">
            <button className="flex items-center mx-1" onClick={(event) => handleEntryDelete(entry.key)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="red" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </button>
            <div className="flex items-center">
                <div className="flex items-center">
                    <span className="flex font-thin text-slate-400 items-center text-xs">Código</span>
                    <select name='accountCode' id='accountCode' className="w-full text-sm font-medium text-gray-500" onChange={(event) => handleAccountCodeChange(event)}>
                        {
                            getAllAccountCodes().map(account => <option key={account.key} value={account.code}>
                                {account.code}
                            </option>)
                        }
                    </select>
                </div>
            </div>
            <div className="mx-1 flex items-center">
                <div className="flex gap-1">
                    <span className="flex font-thin text-slate-400 items-center text-xs">Tipo</span>
                    <span className="text-sm text-green-500 font-medium"> { getEntryTypeFeatures(selectedAccount)[0] } </span>
                </div>
            </div>
            <div className="mx-1">
                <div className="flex gap-1">
                    <span className="flex font-thin text-slate-400 items-center text-xs">Conta</span>
                    <span className="text-sm text-orange-500 font-medium uppercase">{ getEntryTypeFeatures(selectedAccount)[2] }</span>
                </div>
            </div>
            <div className="mx-1 w-auto flex items-center justify-end">
                <div className="flex gap-1 justify-end">
                    <span className="flex font-thin text-slate-400 items-center text-xs">R$</span>
                    <input type='text' className="w-20 flex justify-end text-sm" defaultValue={entry.value} onChange={(event) => console.log(event)}/>
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