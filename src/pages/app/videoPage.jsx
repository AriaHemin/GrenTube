import { useEffect, useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'

function VideoPage (props) {
  let session = props.session
  let setSession = props.setSession
  const { videoid } = useParams()
  const [player, setPlayer] = useState()
  useEffect(() => {
    // eslint-disable-next-line quotes
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&id=${videoid}&key=AIzaSyAbJ50vv1yAikqJlpkjDWX47nkp6KDndG8`)
      .then((response) => response.json())
      .then((data) => { setPlayer(data.items[0].player.embedHtml); console.log(data.items[0].snippet.title); setSession( {...session, notes: [...session.notes, {note: 'note',key: videoid ,video: data.items[0].snippet.title}]} )})
  }, [])
  console.log(session)
  return (
    <div className='w-screen flex flex-col items-center'>
      <div dangerouslySetInnerHTML={ { __html: player } } >
      </div>
      <input className='w-3/4 h-full' ></input>
      <Link to='/dashboard'>
        <button>
          goback
        </button>
      </Link>
    </div>
  )
}

export default VideoPage
