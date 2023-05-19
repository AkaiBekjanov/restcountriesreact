import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';
import './index.scss'
import { DetailCountry } from './DetailCountry';


const client=new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={client}>

 
  <BrowserRouter>
    <Routes>
      <Route  path="/" element={<App />}/>
      <Route  path="/detailcountry/:id" element={<DetailCountry />}/>
    
     
    </Routes>
      
  </BrowserRouter>
  </QueryClientProvider>
    

)