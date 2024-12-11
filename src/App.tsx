import { MoveRight } from 'lucide-react'
import './App.css'

function App() {

  return (
    <div
      className='w-full min-h-dvh'>
      <div className='h-[60px] bg-[#F4FDFE] w-full flex items-center justify-between px-6'>
        <h3 className='font-black text-3xl'>TJ</h3>
        <ul className='flex items-center space-x-6 text-sm *:cursor-pointer'>
          <li className='hover:text-black/70'>Features</li>
          <li className='hover:text-black/70'>Communities</li>
          <li className='hover:text-black/70'>Events</li>
          <li className='hover:text-black/70'>About Us</li>
          <li className='hover:text-black/70'>Login</li>
          <li>
            <div className='bg-black flex gap-2 items-center text-white rounded-2xl px-3 py-1'>
              Join for free
              <MoveRight />
            </div>
          </li>
        </ul>
      </div>
      <div
        style={{
          backgroundImage: "url(/bg.png)",
          backgroundPosition: "center 10%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",

        }}
        className='w-full h-[calc(100dvh-60px)] flex justify-center'
      >
        <div className='max-w-xl flex flex-col items-center text-center space-y-2'>
          <h1 className='font-black text-5xl'>Find Your Tribe, <br /> Build Your Network.</h1>
          <p className='text-2xl max-w-2xl'>Connect with like-minded students for fun, friendships, and future oppurtunities</p>
          <div className='flex items-center justify-center space-x-4'>
            <div className='bg-black flex gap-2 justify-center items-center text-white rounded-2xl px-3 py-1'>
              Join for free
              <MoveRight />
            </div>
            <div className='border justify-center bg-white flex gap-2 items-center text-black rounded-2xl px-3 py-1'>
              Explore Communities
              <MoveRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
