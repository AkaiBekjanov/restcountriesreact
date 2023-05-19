

import React from "react";
import { useState,useEffect } from 'react'
import axios from "axios";
import {useParams,useNavigate} from "react-router-dom";
import { useQuery } from '@tanstack/react-query';

export const DetailCountry=()=>{
    const params=useParams();
    const navigate=useNavigate();
   
    const {data,isLoading}=useQuery(["detailCountry"],async () => {


      const res = await axios.get(`https://restcountries.com/v3.1/alpha/${params.id}`);
      
      return res.data;
    
    })


  
    if(isLoading){
   
      return (
        
       
          <h1 className="loading">
            Loading...
          </h1>
            
      
        
      )
    }
    
    return <div className="detailsCountry container">
        <div className="detailsCountry__card">
         <img src={data[0].flags.png} alt="flag" />
         <div>Capital is {data[0].capital}</div>  
         <div>Population is {data[0].population}</div>  
         
         <button type="button"
            onClick={()=>{
            navigate(-1) //1 step back
            // navigate("/")
          }}
         >Back</button>  

       </div>
       
           
      
    </div>
}