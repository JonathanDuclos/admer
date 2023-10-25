import React from 'react'
import { journalBookPageContent } from '../data/dummy';
import Entry from '../components/Entry';

const JournalBook = () => {
  return (
    <div>
      <p className='font-bold text-md title'> {journalBookPageContent.title} </p>
      <div className='mt-4 mx-2s'>
        <div>
          {
          journalBookPageContent.data.map(
            i => <Entry entry={i} key={i.key}/>
          )
          }
        </div>
      </div>
    </div>
  )
}



export default JournalBook