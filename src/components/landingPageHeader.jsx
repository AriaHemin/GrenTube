/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import { useState } from 'react'
function LandingPageHeader (props) {
  const [isMenuActive, setIsMenuActive] = useState(false)
  useState(()=>{console.log(window.innerWidth, window.innerWidth < 640)},[window.innerWidth])
  return (
    <div>
      {window.innerWidth < 640
        ? <header className='flex flex-row justify-between w-screen items-center ' >
          <div className='logo' >
            <img className='w-0 xs:w-[50px] object-cover object-left h-[50px] sm:w-[140px]' src='https://firebasestorage.googleapis.com/v0/b/grentube-66fd4.appspot.com/o/grentube%20logo.svg?alt=media&token=6aae336f-70c4-4f0f-9494-305831bfb77e' alt='GrenTube'/>
          </div>
          <div className='h-[50px] z-50 mx-1 overflow-visible' >
            {!isMenuActive
              ? <div className="flex justify-end" >
                  <div className="m-2 cursor-pointer" onClick={() => { setIsMenuActive(!isMenuActive) }} >
                      <svg className="w-8 h-8 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                  </div>
              </div>
              : <div className="flex flex-col h-[185px] bg-white " >
                  <div className="flex justify-end" >
                      <div className=" m-1 cursor-pointer" onClick={()=>{setIsMenuActive(!isMenuActive)}} >
                          <svg className="w-10 h-10 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
                      </div>
                  </div>
                  <div className="flex flex-col justify-center font-bold" >
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
              </div>
              }
          </div>
        </header>
        : <header className='flex flex-row justify-between w-screen items-center ' >
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
      }
    </div>
  )
}

export default LandingPageHeader
