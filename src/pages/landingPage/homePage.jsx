// import LandingPageFooter from '../../components/landingPageFooter'
import LandingPageHeader from '../../components/landingPageHeader'
function HomePage () {
  return (
    <div>
      <LandingPageHeader page={'home'}/>
      <div className='flex items-center justify-center' >
        <div className='w-1/2 mt-24 py-4 px-2 h-96 bg-[#B1CC33] text-white rounded-xl flex items-center justify-center flex-row' >
          <div className='w-1/2 mx-1'>
            <img className='w-full' src='/public/assets/1F34F.svg'/>
          </div>
          <div className='w-1/2 mx-1'>
            <h1 className='text-4xl font-bold' >page under development !</h1>
            <p className='py-2'>i know you were waiting for a cool home page! but in the mean while check out the app.</p>
            <button className='bg-white text-black my-6' >start a session</button>
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
