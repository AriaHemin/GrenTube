import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function SessionMaker (props) {
  useEffect(()=>{console.log(props.session)},[])
  const navigate = useNavigate()
  return (
    <div>
      <h1 className='text-3xl' >Make a  session !</h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        navigate('/dashboard')
      }} >
        <div>
          <label>what is your intention : </label>
          <select>
            <option>o1</option>
            <option>o2</option>
            <option>o3</option>
            <option>o4</option>
          </select>
        </div>
        <div>
          <label>what do you wish to acheive : </label>
          <input className='border rounded px-1'/>
        </div>
        <button >make session</button>
      </form>
    </div>
  )
}

export default SessionMaker
