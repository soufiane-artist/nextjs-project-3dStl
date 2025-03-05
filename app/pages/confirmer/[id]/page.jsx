// order confermed
'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function page() {

    const [model,setModel] = useState({});
    const {id} = useParams()

    useEffect(()=>{
        const getModel = async ()=>{
            await axios.get(`http://localhost:2002/api/models/${id}`)
            .then((res)=>{
                console.log(res.data);
                setModel(res.data)
            }).catch((err)=>{
                console.log(err);
            })
        }
        getModel()
    },[id])

  return (
    <div>
        <h1>Order Confirmed</h1>
        <h2>Order ID: {model?._id}</h2>
        <h2>Order Amount: {model?.price}</h2>
    </div>
)
}

export default page
