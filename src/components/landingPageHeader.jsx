/* eslint-disable react/prop-types */
function LandingPageHeader (props) {
  return (
    <div>
      <header className='flex flex-row justify-between w-screen items-center' >
        <div className='logo' >
          <img className='w-[140px] h-[50px]' src='/src/assets/grentubelogo.svg' alt='GrenTube'/>
        </div>
        <div className='font-bold flex flex-row items-center mx-1' >
          <a href='/'>
            <div style={ props.page === 'home' ? { color: '#B1CC33' } : null } className='px-2 cursor-pointer' >home</div>
          </a>
          <a href='/info'>
            <div style={ props.page === 'info' ? { color: '#B1CC33' } : null } className='px-2 cursor-pointer' >GrenTube?</div>
          </a>
          <a href='/about'>
            <div style={ props.page === 'about' ? { color: '#B1CC33' } : null } className='px-2 cursor-pointer' >about</div>
          </a>
          <a href='/contact'>
            <div style={ props.page === 'contact' ? { color: '#B1CC33' } : null } className='px-2 cursor-pointer' >contact</div>
          </a>
          <div className='px-2' >
            <a href='/dashboard'>
              <button >start a session</button>
            </a>
          </div>
        </div>
      </header>
    </div>
  )
}

export default LandingPageHeader
