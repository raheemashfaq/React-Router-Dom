import React from 'react'
import {useState, useEffect,} from 'react'
import { useLoaderData } from 'react-router-dom'
const Github = () => {
//  const [data,setData] =useState([])
//   const profile = useEffect(()=>{
//     fetch('https://api.github.com/users/raheemashfaq')
//     .then((res)=>res.json())
//     .then((data)=>{console.log(data)
//       setData(data)
//     })
//   },[])
const data = useLoaderData()
  return (
    <>
    
    <div className='text-3xl text-center text-white bg-gray-500 p-4'>
     
       Github 
       <img src={data.avatar_url} width={'230px'} alt="" />
       </div>
       </>
  )
}

export default Github


export const userInfoLoader =async ()=>{
  const response = await fetch('https://api.github.com/users/raheemashfaq')
  return await response.json()
}