import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function VideoPage () {
  const { videoid } = useParams()
  const [player, setPlayer] = useState()
  useEffect(() => {
    // eslint-disable-next-line quotes
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&id=${videoid}&key=AIzaSyAbJ50vv1yAikqJlpkjDWX47nkp6KDndG8`)
      .then((response) => response.json())
      .then((data) => { setPlayer(data.items[0].player.embedHtml); console.log(data.items[0].player.embedHtml) })
  }, [])
  return (
    <div>
      <div dangerouslySetInnerHTML={ { __html: player } } >
      </div>
      <a href='/dashboard'>
        <button>
          goback
        </button>
      </a>
    </div>
  )
}

export default VideoPage
