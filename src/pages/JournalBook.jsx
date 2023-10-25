import React from 'react'
import { journalBookPageContent } from '../data/dummy';
import Entry from '../components/Entry';

const JournalBook = () => {
  return (
    <div>
      <p className='mx-1 font-bold text-md title'> {journalBookPageContent.title} </p>
      <div className='mt-4 mx-2s'>
        <div>
          {
            journalBookPageContent.data.map( i => <Entry entry={i} key={i.key}/> )
          }
          <div class="flex justify-end m-2 w-auto">
            <div class="flex rounded-md border border-slate-200 p-2 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default JournalBook