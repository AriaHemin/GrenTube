import LandingPageHeader from '../../components/landingPageHeader'
import { Link } from 'react-router-dom'
function HomePage () {
  return (
    <div>
      <LandingPageHeader page={'home'}/>
      <div className='flex items-center justify-center' >
        <div className='w-3/4 sm:w-1/2 mt-24 py-4 px-2 h-96 bg-[#B1CC33] text-white rounded-xl flex items-center justify-center flex-row' >
          <div className='w-0 sm:w-1/2 sm:mx-1'>
            <img className='w-0 sm:w-full' src='https://firebasestorage.googleapis.com/v0/b/grentube-66fd4.appspot.com/o/1F34F.svg?alt=media&token=7b2c966e-88aa-4d81-8390-ca592a6c2c96'/>
          </div>
          <div className='sm:w-1/2 mx-1'>
            <h1 className='text-4xl font-bold' >page under development !</h1>
            <p className='py-2'>i know you were waiting for a cool home page! but in the mean while check out the app.</p>
            <Link to='/session'>
              <button className='bg-white text-black my-6' >start a session</button>
            </Link>
          </div>
        </div>
      </div>
      {/*
        <LandingPageFooter/>
      */}
    </div>
  )
}

export default HomePage
