import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Group from './assets/img/Group.png';
import logo from './assets/img/logo.png';
import open from './assets/open.png'
import close from './assets/close.png'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');
body{font-family: 'Space Grotesk', 'sans-serif'}`;


function App() {
  const [show, setShow] = useState("false");
  const clickIcon = () =>{
    setShow(!show);
  }

  return (
    <>
    
    <GlobalStyle />    
    <div className='flex h-full'>

        <div className='flex w-2/5 h-full left-0 items-center'>
          
          <div className='flex flex-col justify-center mt-20 mx-20 w-full'>

            <div className='flex justify-center'>
              <img className='flex justify-center ' src={logo} alt="" />
            </div>

            <div className='flex flex-col'>
              <h1 className='text-amber-500 pt-10 text-lg pb-5 font-semibold'>Login</h1>

              <form  className='flex flex-col ' action="">
                <label htmlFor="" className='md:font-bold pb-1'>Email or Mobile</label>
                <input type="text" className='w-full border rounded-md p-3' placeholder="Enter register email or mobile"/>
                
                  <label htmlFor="password" className='md:font-bold pb-1 pt-3'>Password</label>
                <div className="relative">
                  <input type={show ? "password" : "text"} 
                  className='w-full border rounded-md p-3' 
                  placeholder='Enter password'/>
                  {
                    show ? (
                      <img src={open} alt="" className='absolute top-4 right-4 h-5 w-5' onClick={clickIcon}/>
                    ) : (
                  <img src={close} alt="" className='absolute top-4 right-4 h-5 w-5' onClick={clickIcon}/>
                      
                    )
                  }
                  
 
                </div>

                <h1 className='text-right md:font-medium pt-2 pb-4'>FORGOT PASSWORD?</h1>

                <button type='submit' className='w-full font-bold py-3 px-4 bg-amber-500 rounded-md'>SUBMIT</button>
                <div className='flex justify-center py-20'>Not have an account? <a href="" className='text-blue-700 underline'>Register Here</a></div>
                
              </form>
          </div>

          </div>

        </div>
          <div className='flex w-3/5 h-screen bg-orange-100 justify-center items-center '>
            <div className='flex max-w-xl max-h-min'>
              <img className='flex justify-center ' src={Group} alt="" />
            </div>
          </div>
    </div>
    </>
  )
}

export default App
