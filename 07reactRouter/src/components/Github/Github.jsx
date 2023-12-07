import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Abhishektiwari3')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className='text-center m-4 bg-blue-200 text-white shadow p-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={250} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/Abhishektiwari3')
    return response.json()
}
