import banner from '../../images/banner.jpg';

export default function Home() {
  return (
    <div className='container mx-auto rounded-xl h-auto sm:h-[600px] flex flex-col justify-center items-center' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.473), rgba(0, 0, 0, 0.164),rgba(0, 0, 0, 0.39)),url(${banner})`, backgroundPosition:'top', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
      <h1 className='text-3xl md:text-6xl leading-[40px] md:leading-[80px] text-white font-bold max-w-[950px] text-center my-6'>Discover an exceptional cooking class tailored for you!</h1>
      <p className='text-center text-white text-md md:text-xl mb-4 max-w-[1000px]'>Embark on a personalized culinary journey with our exceptional cooking class, meticulously tailored to your preferences and skill level. Discover your inner chef today!</p>
      <div className="flex gap-5 sm:flex-row flex-col justify-center items-center pb-10">
        <button className='btn1 btn rounded-full'>Explore Now</button>
        <button className='btn rounded-full'>Our Feedback</button>
      </div>
    </div>
  );
}
