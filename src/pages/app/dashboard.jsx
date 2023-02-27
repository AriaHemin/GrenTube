import { useState } from 'react'
import { Link } from 'react-router-dom'

function DashBoard () {
  const [userInput, setUserInput] = useState()
  const [videos, setVideos] = useState()
  function getVideos (akeyword) {
    // eslint-disable-next-line quotes
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${akeyword}&type=video&key=AIzaSyAbJ50vv1yAikqJlpkjDWX47nkp6KDndG8`)
      .then((response) => response.json())
      .then((data) => { setVideos([data.items]); console.log(data.items) })
  }

  return (
    <div className='flex items-center justify-center' >
      <div className='p-0 m-0 flex items-center justify-center flex-col'>
      <form className='flex flex-row justify-center bg-[#2f2f2f] text-white py-1 px-1 rounded-full mx-3 my-5' >
        <input onChange={(e) => { setUserInput(e.target.value); console.log(userInput) }} className='text-black px-5 w-96 rounded-full ' />
        <button onClick={(e) => {
          e.preventDefault()
          setUserInput()
          getVideos(userInput)
        }} className="p-0 flex items-center justify-center h-6 w-6 ml-1 rounded-full" >
          <img className="w-4 h-4" src='https://firebasestorage.googleapis.com/v0/b/grentube-66fd4.appspot.com/o/magnifying-glass-solid.svg?alt=media&token=c38d0902-bda0-4a47-bdb0-7996668a87ec' alt='search' />
        </button>
      </form>
      <div className='grid grid-cols-6 w-3/4 items-center justify-center' >{videos !== undefined
        ? videos[0].map((video) => {
          return (
            // eslint-disable-next-line quotes
            <Link to={`/video/${video.id.videoId}`} className='cursor-pointer flex items-center justify-center flex-col' key={video.etag} >
              <div className={`w-[${video.snippet.thumbnails.default.width}px] h-[${video.snippet.thumbnails.default.height}px]`}>
                <img className='w-full' src={video.snippet.thumbnails.default.url} />
              </div>
              <div>
                <div className={`w-[${video.snippet.thumbnails.default.width}]px`} >{video.snippet.title}</div>
              </div>
            </Link>
          )
        })
        : null}</div>
    </div>
    </div>
  )
}

export default DashBoard
