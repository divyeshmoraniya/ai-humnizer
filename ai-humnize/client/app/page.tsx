import React from 'react'
import File from './components/File'
function page() {
  return (
    <div className='bg-black flex min-h-screen '>
      <div className='w-[30%] text-white flex flex-col items-center justify-center '>
            <File />
      </div>
      <div className='w-[70%] border-l-white border-1 text-white'>
              this is part for download pdf after humnize and more tasks.
      </div>
    </div>
  )
}

export default page