import React from 'react'

function SearchBox() {
  return (
   <form className='text-center mb-28 mt-56'>
    <input className='py-5 px-6 w-2/5 border rounded rounded-r-none outline-none text-[1.5rem] tablet:w-3/5 mobile:w-full' type="text" />
    <button className='text-[1.5rem] py-5 px-10 text-black bg-[#E3E6F3] rounded rounded-l-none cursor-pointer outline-none duration-100 hover:bg-[#088178] hover:text-white' type='submit'>Search</button>
   </form>
  )
}

export default SearchBox