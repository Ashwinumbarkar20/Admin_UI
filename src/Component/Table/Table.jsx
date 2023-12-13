/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import styled from 'styled-components'
import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

export default function Table({allData,setAllData}) {
  const[selectedrows,setSelectedrows]=useState([]);
  const handleSelectAll=()=>{
    setSelectedrows((prevData)=>
      prevData.length===allData.length?[]:allData.map((row)=>row.id));
  };

const handleRowChnage=(id)=>{

  setSelectedrows((prevSelectedRows) => {
    if (prevSelectedRows.includes(id)) {
    
      return prevSelectedRows.filter((rowId) => rowId !== id);
    } else {
   
      return [...prevSelectedRows, id];
    }
  });
}

const handleDeleteAll=()=>{
  setAllData((prevAllData) =>
  prevAllData.filter((record) => !selectedrows.includes(record.id))
);
setSelectedrows([]);
}

const handleSingleDelete=(id)=>{
  setAllData((prevAllData) => prevAllData.filter((record) => record.id !== id));
  setSelectedrows((prevSelectedRows) => prevSelectedRows.filter((rowId) => rowId !== id));
   
}

  return (
    <Maindiv>
    {allData.length===0?<>
    <div className='notfound__container'>
      <p>NO MATCH FOUND</p>
    </div>
    </>:<>
    <table>
      <thead>
    <tr>
      <th><input type="checkbox" 
      id="selectAll" 
      checked={selectedrows.length==allData.length}
      onChange={handleSelectAll} /></th>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
      <th>Action</th>
    </tr>
   </thead>
   <tbody>  
     {allData.map((record)=>{return(
    <tr className="t-row" key={record.id}>
    <td><input type="checkbox"  
    name="" 
    id="" 
    checked={selectedrows.includes(record.id)}
    onChange={()=>{handleRowChnage(record.id)}} /></td>
    <td>{record.name}</td>
    <td>{record.email}</td>
    <td>{record.role}</td>
    <td>
    <div className='actions'>
      <MdOutlineDelete className='delete_btn' title="Delete this Record" onClick={()=>{handleSingleDelete(record.id)}}/>
      <CiEdit className='edit_btn' title="Edit this Record" />
    </div></td>   
    </tr>
  )})}
       </tbody>
   </table>
   <div className='Delete_selected'>
    <button type="button" onClick={handleDeleteAll}>Delete Selected</button>
   </div>
    </>}
    
    </Maindiv>
  )
}

const Maindiv=styled.div`
width:100%;
padding:10px;
margin:32px auto;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
.notfound__container{
  
  P{
  padding:10px;
  color:white;
  background-color:red;
  border:2px solid white;
  border-radius:5px;
}

}

table{
 
  width:100%;
   th{
    border:2px solid red;
    padding:5px;
   }
 tbody .t-row{
    height:20px ;
    border:2px solid red ;
    text-align:center;
    color:blue;
  
        }
    td{
      border-bottom:2px solid black;
      padding:5px;
      }
  .delete_btn{
    color:blue;
    cursor: pointer;
    border:1px solid blue;
    padding:1px 4px;
    border-radius:50px;
    box-shadow:2px 2px 8px rgb(0,0,255,.30);
    &:hover{
color:red;
border:1px solid red;
box-shadow:2px 2px 8px rgb(255,0,0,.30);
    }

  }     
  .edit_btn{
    color:blue;
    cursor: pointer;
    border:1px solid blue;
    padding:1px 4px;
    border-radius:50px;
    box-shadow:2px 2px 6px rgb(0,0,255,.30);
    &:hover{
color:red;
border:1px solid red;
box-shadow:2px 2px 6px rgb(255,0,0,.30);
    }

  }
  .actions{
      display:flex;
      flex-direction:row;
      justify-content:center;
      gap:10px;
      align-items:center;
      
    }


}
.Delete_selected{
  display:flex;
  align-items:center;
  margin-top:20px;
  button{
    cursor: pointer;
  border-radius:50px;;
  padding:10px 20px;
  background-color:red;
  color:white;
  transition:all 0.3s ease;
  border:none;
  box-shadow:2px 2px 6px rgba(0,0,0,0.5),inset -2px -2px  rgba(255,255,255,0.3);
  &:hover{
    
    color:red;
    background-color:white;
    border:1px solid red;

  }
  }
}
`
