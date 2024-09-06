import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
let {userid} = useParams();

  return (
  <>
  <h1 className='text-3xl bg-orange-500 text-black text-center'>User:{userid}</h1>
  </>
  )
}

export default User
