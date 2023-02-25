function SearchBar () {
  return (
    <div>
      <form onClick={() => {
        console.log('search')
      }} className='flex flex-row justify-center bg-[#2f2f2f] text-white py-1 px-1 rounded-full mx-3 my-5' >
        <input className='text-black px-5 w-96 rounded-full py-' />
        <button onClick={(e) => { e.preventDefault() }} className="p-0 flex items-center justify-center h-6 w-6 ml-1 rounded-full" >
          <img className="w-4 h-4" src='/src/assets/magnifying-glass-solid.svg' alt='search' />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
