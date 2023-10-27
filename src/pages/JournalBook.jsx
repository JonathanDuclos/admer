import React from 'react'
import { journalBookPageContent } from '../data/dummy';
import Entry from '../components/Entry';

const addEntryHandle = () => {
  console.log("Add..")
}

const JournalBook = () => {
  return (
    <div>
      <p className='mx-1 font-bold text-md title'> {journalBookPageContent.title} </p>
      <div className='mt-4 mx-2s'>
        <div>
          {
            journalBookPageContent.data.map( i => <Entry entry={i} key={i.key}/> )
          }
          <div className="flex justify-end m-2 w-auto">
            <button className="flex rounded-md border border-slate-200 p-2 shadow-lg" onClick={addEntryHandle}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}



export default JournalBook