import React,{useState} from 'react'
import bg    from '../assets/bg-main-desktop.png'
import cardF from '../assets/bg-card-front.png'
import cardB from '../assets/bg-card-back.png'

import SeparatedNumberInput from 'react-separated-number-input';


const MainPage = () => {

    const [data,setData]=useState({
        name:'',
        num:'',
        month:'',
        year:'',
        cvc:'',
    })

    const changeHandler = event =>{
      
        setData({...data,[event.target.name]:event.target.value})
       
    }  
    const changeHandler2 = event =>{
      
        setData({...data,[event.target.name]:event.target.value})
       
    }   
    const changeHandler3 = event =>{
      
        setData({...data,[event.target.name]:event.target.value})
       
    }  


 
    return (
        <div className='flex flex-col sm:flex-row relative  text-center'>
               <p className='text-white z-50 md:left-[220px]  text-xl tracking-widest items-baseline absolute left-[50px] font-mono  top-[210px]'>{data.num}</p>
               <p className='text-white z-50 sm:left-[220px] sm:top-[250px] absolute font-mono text-[.8rem] uppercase left-[46px] top-[250px]'>{data.name}</p>
               <p className='text-white z-50 sm:top-[250px] sm:left-[450px] absolute font-mono text-[.8rem] uppercase left-[266px] top-[250px]'>{data.month}/{data.year}</p>
               <div className='bg-white z-50 sm:left-[220px] sm:top-[130px]  absolute left-[45px] top-[145px] rounded-full w-[35px] h-[35px]'></div>
               <div className='bg-none z-50 sm:left-[280px] sm:top-[140px] border-[1px] border-white  absolute left-[90px] top-[155px] rounded-full w-[15px] h-[15px]'></div>
           
            <div className='flex h-[250px] flex-col sm:flex-1/3 bg-red-100 sm:h-screen relative'>

                <img src={bg} alt="" className='sm:flex-1/3 flex h-[250px] flex-col sm:h-screen relative' />
                <img src={cardB} alt="back-card" className='flex w-[300px] top-[35px] left-[75px] absolute sm:w-[350px] sm:top-[310px] sm:left-[250px]' />

               <img src={cardF} alt="front-card" className='flex w-[300px] top-[125px] left-[25px] absolute  sm:w-[350px] sm:top-[100px] sm:left-[185px]' />

                
            </div>







            
            <div className='flex flex-col h-[550px]  justify-center items-center sm:basis-2/3 sm:h-screen bg-white'>


                <div className='mt-[120px] w-[380px] h-screen text-start  font-mono tracking-widest flex flex-col  '>

                <label className=' mx-5 text-[14px] font-bold mt-[10px] uppercase' >Cardholder Name</label>
                <input placeholder='e.g. Jane Appleseed' value={data.name} onChange={changeHandler} type="text"  name='name' className='mx-5 mb-3 mt-[5px] px-2 h-[48px] rounded-md border-[1.5px] border-gray-300 ' /> 
 
                <label className=' mx-5 text-[14px] font-bold mt-[10px] uppercase' >Card Number</label>
                <SeparatedNumberInput placeholder='e.g. 1234 5678 9123 0000 'maxLength={19}  groupLengths={[4, 4, 4, 4]} value={data.num} onChange={changeHandler2} type="text"  name='num'  className='mx-5 mb-3 mt-[10px] border-[1.5px] border-gray-300 px-2 h-[48px] rounded-lg' />

                <label className=' mx-5 text-[14px] font-bold mt-[10px] uppercase' >Exp. Date (MM/YY) MM YY CVC </label>
                <div className='flex'>
                <input type="text"name="month" placeholder='month' value={data.month} maxLength={2} onChange={changeHandler3}  className='mx-5 mb-3 text-gray-500 mt-[5px] px-2 w-1/4 h-[48px] rounded-lg border-[1.5px] border-gray-300'></input>
                <input type="text"name="year" placeholder='year' value={data.year} maxLength={2} onChange={changeHandler3}  className='mx-5 mb-3 text-gray-500 mt-[5px] px-2 w-1/4 h-[48px] rounded-lg border-[1.5px] border-gray-300'></input>
                <input type="text"name="birthday" placeholder='e.g 123' value={data.cc} maxLength={4} onChange={''}  className='mx-5 mb-3 text-gray-500 mt-[5px] px-2 w-2/4 h-[48px] rounded-lg border-[1.5px] border-gray-300'></input>
                </div>
               
                <button className='ml-[15px] mt-[10px] w-[350px] font-semibold  text-white rounded-lg h-[55px] hover:bg-[#16003bc9] bg-[#16003B]' type='submit' >Confirm</button>

                </div>

            </div>
        </div>
    )
}

export default MainPage