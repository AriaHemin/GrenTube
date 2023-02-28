/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
function LandingPageHeader (props) {
  return (
    <div>
      <header className='flex flex-row justify-between w-screen items-center ' >
        <div className='logo' >
          <img className='w-0 xs:w-[50px] object-cover object-left h-[50px] sm:w-[140px]' src='https://firebasestorage.googleapis.com/v0/b/grentube-66fd4.appspot.com/o/grentube%20logo.svg?alt=media&token=6aae336f-70c4-4f0f-9494-305831bfb77e' alt='GrenTube'/>
        </div>
        <div className='font-bold flex flex-row items-center mx-1' >
          <Link to='/'>
            <div style={ props.page === 'home' ? { color: '#B1CC33' } : null } className='px-2 cursor-pointer' >home</div>
          </Link>
          <Link to='/info'>
            <div style={ props.page === 'info' ? { color: '#B1CC33' } : null } className='px-2 cursor-pointer' >GrenTube?</div>
          </Link>
          <Link to='/about'>
            <div style={ props.page === 'about' ? { color: '#B1CC33' } : null } className='px-2 cursor-pointer' >about</div>
          </Link>
          <Link to='/contact'>
            <div style={ props.page === 'contact' ? { color: '#B1CC33' } : null } className='px-2 cursor-pointer' >contact</div>
          </Link>
          <div className='px-2' >
            <Link to='/dashboard'>
              <button className=' text-[0.7em] md:text-[1em]' >start a session</button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default LandingPageHeader
