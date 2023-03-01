import { useState } from 'react'
import Modal from './modal'
import SessionMake from '../pages/app/sessionMaker'

function MakeSessionPop () {
  const innerComp = <SessionMake/>
  const [isModalActive, setIsModalActive] = useState(false)
  return (
    <div>
      <button className='bg-white text-black' onClick={() => { setIsModalActive(true) }} >start a session</button>
      <Modal isModalActive={isModalActive} setIsModalActive={setIsModalActive} innerComp={innerComp} />
    </div>
  )
}

export default MakeSessionPop
