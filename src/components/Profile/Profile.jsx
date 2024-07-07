import React from 'react'
import {useState,useEffect} from'react';
import { useLoaderData } from 'react-router-dom';
function Profile(){
    const data=useLoaderData()
    // useEffect(()=>{
    //     fetch(`https://leetcode-api-faisalshohag.vercel.app/lokesh_kad`)
    //     .then((res)=>res.json())
    //     .then(data=>{
    //         setData(data)
    //     })
    //     console.log(data);
    // },[])
    return (
        <div className='text-center m-4 bg-black text-white ring-1 rounded-sm p-4'>LeetCode Total Solved :{data.totalSolved}
        <h1 className='px-2 text-xl text-green-400'>Easy Solved :{data.easySolved}/{data.totalEasy}</h1>
        <h1 className='text-xl text-yellow-300 '>Medium Solved  :{data.mediumSolved}/{data.totalMedium}</h1>
        <h1 className='text-xl text-red-500'> Hard Solved :{data.hardSolved}/{data.totalHard}</h1>
        </div>

        
        
    );
}

export default Profile;

export const leetcodeInfoLoader =async()=>{
    const response =await fetch(`https://leetcode-api-faisalshohag.vercel.app/lokesh_kad`)

    return response.json()
}