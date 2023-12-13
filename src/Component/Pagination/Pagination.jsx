import React,{useState} from 'react'
import styled from 'styled-components'

export default function Pagination({totalPages,endpage,page,currentPage}) {

  console.log(page)
  return (
    <>
<Maindiv>
<span className='page__no'  onClick={()=>{currentPage((page)=1)}}>⬅️</span>
<span className='page__no' onClick={()=>{if(page!==1){currentPage(page-1)}}}>⏮️</span>
{   
  totalPages.map((a,index)=>{return(
    <span className={`page__no ${page===(index+1)?"active":""}`} key={index} onClick={()=>{currentPage(index+1)}}>{index+1}</span>
  )})
}
<span className={`page__no`} onClick={()=>{if(page!==endpage){currentPage(page+1)}}}>⏭️</span>
<span className='page__no' onClick={()=>{currentPage(endpage)}}>➡️</span>
</Maindiv> 
    </>
  )
}
const Maindiv=styled.div`
display:flex;
justify-content:center;
flex-direction:row;
gap:10px;
align-items:center;
margin-bottom:20px;
.page__no{
  cursor: pointer;
  padding:2PX 5PX;
  font-weight:bold;
  margin:2px;
  border:1px solid black;
  border-radius:5px;
  transition:all 0.3s ease;
 &:hover{
background-color:darkgray;
color:black;

  }
  
 
}
.active{
    background-color:darkgrey;
  }
`
