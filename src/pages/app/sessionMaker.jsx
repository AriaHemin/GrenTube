import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SessionMaker (props) {
  const [intention, setIntention] = useState()
  const [goal, setGoal] = useState()
  const [timer] = useState()
  const [videoLimit] = useState()
  const [reward, setReward] = useState()
  const [punishment, setPunishment] = useState()
  const navigate = useNavigate()
  // const session = props.session
  const setSession = props.setSession
  return (
    <div>
      <h1 className='text-3xl' >Make a  session !</h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        setSession({
          notes: [],
          intention,
          goal,
          challenge: {
            timer: {
              active: timer !== undefined,
              data: timer
            },
            videoLimit: {
              active: videoLimit !== undefined,
              data: videoLimit
            },
            reward: {
              active: reward !== undefined,
              data: reward
            },
            punishment: {
              active: punishment !== undefined,
              data: punishment
            }
          }
        })
        navigate('/dashboard')
      }} >
        <div>
          <div className='flex flex-row'>
              <div>what is your intention : </div>
              <input onChange={(e) => { setIntention(e.target.value) }} className='border rounded px-1 mx-1'/>
          </div>
          <div className='flex flex-row'>
            <div>what is your goal : </div>
            <input onChange={(e) => { setGoal(e.target.value) }} className='border rounded px-1 mx-1'/>
          </div>
        </div>
        <div>
          <div className='text-xl font-bold' >challenge mode</div>
          <div>
            <div className='flex flex-row' >
              <div>
                <div>timer</div>
              </div>
              <div>
                <div>video limit</div>
              </div>
            </div>
            <div className='flex flex-row'>
              <div className='flex flex-row'>
                <div>reward : </div>
                <input onChange={(e) => { setReward(e.target.value) }} className='border rounded px-1 mx-1'/>
              </div>
              <div className='flex flex-row'>
                <div>punishment : </div>
                <input onChange={(e) => { setPunishment(e.target.value) }} className='border rounded px-1 mx-1'/>
              </div>
            </div>
          </div>
        </div>
        <button >make session</button>
      </form>
    </div>
  )
}

export default SessionMaker
