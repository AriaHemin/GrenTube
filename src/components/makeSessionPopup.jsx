import { useState } from 'react'
import Modal from './modal'
import SessionMaker from '../pages/app/sessionMaker'

function MakeSessionPop (props) {
  let session = props.session
  let setSession = props.setSession
  const innerComp = <SessionMaker session={session} setSession={setSession} />
  const [isModalActive, setIsModalActive] = useState(false)
  return (
    <div>
      <button className='bg-white text-black' onClick={() => { setIsModalActive(true) }} >start a session</button>
      <Modal isModalActive={isModalActive} setIsModalActive={setIsModalActive} innerComp={innerComp} />
    </div>
  )
}

export default MakeSessionPop
