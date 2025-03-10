import React,{ useContext } from 'react'
import { DataContextApi } from '../context/DataContext'


const ContextPage = () => {
    let {data,prateekNumber} = useContext(DataContextApi)
   
    
  return (
    <div><h1>this is number {prateekNumber}</h1></div>
  )
}

export default ContextPage