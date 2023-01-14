import React from 'react'
import bg    from '../assets/bg-main-desktop.png'
import cardF from '../assets/bg-card-front.png'
import cardB from '../assets/bg-card-back.png'


const MainPage = () => {
 
    return (
        <div className='flex flex-col sm:flex-row  text-center'>
            <div className='flex h-[250px] flex-col sm:basis-1/3 bg-red-100 sm:h-screen relative'>
                <img src={bg} alt="" className='sm:basis-1/3 flex h-[250px] flex-col sm:h-screen relative' />
                <img src={cardB} alt="back-card" className='flex w-[300px] top-[35px] left-[75px] absolute sm:w-[350px] sm:top-[310px] sm:left-[250px]' />
                <img src={cardF} alt="front-card" className='flex w-[300px] top-[125px] left-[25px] absolute sm:w-[350px] sm:top-[100px] sm:left-[185px]' />
                <p className='text-white text-xl tracking-widest absolute left-[50px] font-serif top-[210px]'>0000 0000 0000 0000</p>
                <p className='text-white absolute font-mono text-[.8rem] uppercase left-[46px] top-[250px]'>Jane Appleseed</p>
                <p className='text-white absolute font-mono text-[.8rem] uppercase left-[266px] top-[250px]'>00/00</p>
                <div className='bg-white  absolute left-[45px] top-[145px] rounded-full w-[35px] h-[35px]'></div>
                <div className='bg-none border-[1px] border-white  absolute left-[90px] top-[155px] rounded-full w-[15px] h-[15px]'></div>
            </div>







            
            <div className='flex flex-col h-screen justify-center items-center sm:basis-2/3 sm:h-screen bg-white'>


                <div className='mt-[120px] w-[380px] h-screen text-start  font-mono tracking-widest flex flex-col  '>

                <label className=' mx-5 text-[14px] font-bold mt-[10px] uppercase' for="name">Cardholder Name</label>
                <input placeholder='e.g. Jane Appleseed' type="text" id='name' name='name' className='mx-5 mb-3 mt-[5px] px-2 h-[48px] rounded-md border-[1.5px] border-gray-300 ' /> 
 
                <label className=' mx-5 text-[14px] font-bold mt-[10px] uppercase' for="cardName">Card Number</label>
                <input placeholder='e.g. 1234 5678 9123 0000 ' type="text" id='cardName' name='cardName'  className='mx-5 mb-3 mt-[10px] border-[1.5px] border-gray-300 px-2 h-[48px] rounded-lg' />

                <label className=' mx-5 text-[14px] font-bold mt-[10px] uppercase' for="birthday">Exp. Date (MM/YY) MM YY CVC </label>
                <input type="date" id="birthday" name="birthday"  className='mx-5 mb-3 text-gray-500 mt-[5px] px-2 h-[48px] rounded-lg border-[1.5px] border-gray-300'></input>
                <button className='ml-[15px] mt-[10px] w-[350px] font-semibold  text-white rounded-lg h-[55px] bg-[#16003B]' type='submit' >Confirm</button>

                </div>

            </div>
        </div>
    )
}

export default MainPage