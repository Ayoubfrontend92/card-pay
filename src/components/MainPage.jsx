import React,{useState,useEffect} from 'react'
import bg    from '../assets/bg-main-desktop.png'
import cardF from '../assets/bg-card-front.png'
import cardB from '../assets/bg-card-back.png'
import SeparatedNumberInput from 'react-separated-number-input';
import { Validate } from './Validate';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from "./toast";


const MainPage = () => {

    const [data,setData]=useState({
        name:'',
        num:'',
        month:'',
        year:'',
        cvc:'',
        isAccepted:  false
    })

    const [errors,setErrors]=useState({});
    const [touched,setTouched]=useState({});

    const focusHandler = event =>{
        setTouched({...touched,[event.target.name]:true })
    }

     const changeHandler = event =>{
       if (event.target.name === "isAccepted" ){
       setData({...data , [event.target.name]: event.target.checked  })
       }else {
        setData({...data,[event.target.name]:event.target.value})
       }
       
    } 

    useEffect(()=>{
        setErrors(Validate(data,"pay"))
    
    },[data,touched])

    const submitHandler = event =>{
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify("your pay success","success")
        }else {
            notify("invalid data","error")
            setTouched({
                name:true,
                num:true,
                month:true,
                year:true,
                cvc:true  
            })
        }
    }
    


 
    return (
        <form onSubmit={submitHandler} className='flex w-full h-screen flex-col sm:flex-row relative  text-center'>
               <p className='text-white z-50 md:left-[220px]  text-xl tracking-widest items-baseline absolute left-[50px] font-mono  top-[210px]'>{data.num?data.num:"0000 0000 0000 0000"}</p>
               <p className='text-white z-50 sm:left-[220px] sm:top-[250px] absolute font-mono text-[.8rem] uppercase left-[46px] top-[250px]'>{data.name ?data.name:"Ayoub rezaei"}</p>
               <p className='text-white z-50 sm:top-[250px] sm:left-[450px] absolute font-mono text-[.8rem] uppercase left-[266px] top-[250px]'>{data.month?data.month:"00"}/{data.year?data.year:"00"}</p>
               <div className='bg-white z-50 sm:left-[220px] sm:top-[130px]  absolute left-[45px] top-[145px] rounded-full w-[35px] h-[35px]'></div>
               <div className='bg-none z-50 sm:left-[280px] sm:top-[140px] border-[1px] border-white  absolute left-[90px] top-[155px] rounded-full w-[15px] h-[15px]'></div>
           
            <div className='flex h-[250px] flex-col sm:flex-1/3  sm:h-screen relative'>

                <img src={bg} alt="" className='sm:flex-1/3 flex h-[250px] flex-col sm:h-screen relative' />
                <img src={cardB} alt="back-card" className='flex w-[300px] top-[35px] left-[75px] absolute sm:w-[350px] sm:top-[310px] sm:left-[250px]' />

               <img src={cardF} alt="front-card" className='flex w-[300px] top-[125px] left-[25px] absolute  sm:w-[350px] sm:top-[100px] sm:left-[185px]' />

                
            </div>







            
            <div className='flex flex-col h-screen w-full justify-center items-center sm:basis-2/3 sm:h-screen bg-white'>


                <div className='mt-[120px] w-[380px] h-screen text-start  font-mono tracking-widest flex flex-col  '>


                <div className='flex flex-col'>
                <label className=' mx-5 text-[14px] font-bold mt-[10px] uppercase' >Cardholder Name</label>
                <input placeholder='e.g. Jane Appleseed' value={data.name} onChange={changeHandler} type="text" onFocus={focusHandler}  name='name' className='mx-5 mb-3 mt-[5px] px-2 h-[48px] rounded-md border-[1.5px] border-gray-300 ' /> 
                {errors.name && touched.name && <span className='text-red-700 block sm:px-6 sm:text-[10px] sm:font-bold'>{errors.name}</span>}
                </div>

                <div className='flex flex-col'>
                <label className=' mx-5 text-[14px] font-bold mt-[10px] uppercase' >Card Number</label>
                <SeparatedNumberInput placeholder='e.g. 1234 5678 9123 0000 'maxLength={19}  groupLengths={[4, 4, 4, 4]} onFocus={focusHandler}  value={data.num} onChange={changeHandler} type="text"  name='num'  className='mx-5 mb-3 mt-[10px] border-[1.5px] border-gray-300 px-2 h-[48px] rounded-lg' />
                {errors.num && touched.num && <span className='text-red-700 sm:px-6 sm:text-[10px] sm:font-bold'>{errors.num}</span>}
                </div>

                <div className='flex flex-col'>
                <label className=' mx-5 text-[14px] font-bold mt-[10px] uppercase' >Exp. Date (MM/YY) MM YY CVC </label>
                </div>
              
                <div className='flex'>
                <div className='flex-col text-center items-center'>
                <input type="text" name="month" placeholder='month'  value={data.month} maxLength={2} onChange={changeHandler} onFocus={focusHandler}   className='zipcode-number mx-5 mb-3 text-gray-500 mt-[5px] px-2 w-1/2 h-[48px] rounded-lg border-[1.5px] border-gray-300'></input>
                {errors.month && touched.month && <span  className='text-red-700 block sm:text-[10px] sm:font-bold'>{errors.month}</span>}
                </div>
               

                <div className='flex-col text-center items-center '>
                <input type="text" name="year" placeholder='year' value={data.year} maxLength={2} onChange={changeHandler} onFocus={focusHandler}   className='mx-5 mb-3 text-gray-500 mt-[5px] px-2 w-1/2 h-[48px] rounded-lg border-[1.5px] border-gray-300'></input>
                {errors.year && touched.year && <span className='text-red-700 block sm:text-[10px] sm:font-bold'>{errors.year}</span>}
                </div>

                
                <div className='flex-col text-center items-center '>
                <input type="password" name="cvc" placeholder='e.g 123' value={data.cvc} maxLength={4} onChange={changeHandler} onFocus={focusHandler}   className='mx-5 mb-3 text-gray-500 mt-[5px] px-2 w-1/2 h-[48px] rounded-lg border-[1.5px] border-gray-300'></input>
                {errors.cvc && touched.cvc && <span className='text-red-700 block sm:text-[10px] sm:font-bold'>{errors.cvc}</span>}
                </div>

                </div>
                <button name="isAccepted"   className='ml-[15px] mt-[10px] w-[350px] font-semibold  text-white rounded-lg h-[55px] hover:bg-[#16003bc9] bg-[#16003B]' type='submit' >Confirm</button>
                </div>
            </div>
            <ToastContainer />

        </form>
    )
}

export default MainPage