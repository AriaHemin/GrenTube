/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
function LandingPageHeader (props) {
  return (
    <div>
      <header className='flex flex-row justify-between w-screen items-center' >
        <div className='logo' >
          <img className='w-[140px] h-[50px]' src='/public/assets/grentubelogo.svg' alt='GrenTube'/>
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
              <button >start a session</button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default LandingPageHeader
