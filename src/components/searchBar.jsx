import { useEffect, useState } from 'react'

function SearchBar () {
  const [keyWord, setKeyWord] = useState()
  const [userInput, setUserInput] = useState()
  const [videos, setVideos] = useState()
  useEffect(() => {
    // eslint-disable-next-line quotes
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${keyWord}&type=video&key=AIzaSyAbJ50vv1yAikqJlpkjDWX47nkp6KDndG8`)
      .then((response) => response.json())
      .then((data) => { setVideos([data.items]); console.log(data.items) })
  }, [keyWord])

  return (

    <div className='p-0 m-0 flex items-center justify-center flex-col'>
      <form onClick={() => {
        setKeyWord(userInput)
      }} className='flex flex-row justify-center bg-[#2f2f2f] text-white py-1 px-1 rounded-full mx-3 my-5' >
        <input onChange={(e) => { setUserInput(e.target.value) }} className='text-black px-5 w-96 rounded-full ' />
        <button onClick={(e) => { e.preventDefault() }} className="p-0 flex items-center justify-center h-6 w-6 ml-1 rounded-full" >
          <img className="w-4 h-4" src='/public/assets/magnifying-glass-solid.svg' alt='search' />
        </button>
      </form>
      <div className='grid grid-cols-6 w-3/4 items-center justify-center' >{videos !== undefined ?
        videos[0].map((video) => {
          return (
            <div className='flex items-center justify-center flex-col' key={video.etag} >
              <div className={`w-[${video.snippet.thumbnails.default.width}px] h-[${video.snippet.thumbnails.default.height}px]`}>
                <img className='w-full' src={video.snippet.thumbnails.default.url} />
              </div>
              <div>
                <div className={`w-[${video.snippet.thumbnails.default.width}]px`} >{video.snippet.title}</div>
              </div>
            </div>
          )
        })
        : null}</div>
    </div>
  )
}

export default SearchBar
