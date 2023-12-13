import styled from "styled-components"
import './App.css'
import Table from "./Component/Table/Table"
import Pagination from "./Component/Pagination/Pagination"
import { useEffect, useState } from "react";

function App() {
  const URL="https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
  
  const[allData,setAllData]=useState([]);
  const[data,setData]=useState([]);
  const[page,setPage]=useState(1);
  const[search,setsearch]=useState("");
  
  
  let perpage=10;
  let totalpage=Math.ceil((allData.length)/perpage);
  const Pages=Array(totalpage);
let lastpage=page*perpage;
let firstpage=lastpage-perpage;
const currentPage=(current)=>{
  setPage(current);
}  
const getData=async()=>{
  try{const res= await fetch(URL);
const jsondata=await res.json();
setAllData(jsondata);
setData(jsondata)}
catch(e){
  console.log("Error in Fetching Data")
}
  }
  useEffect(() => {
    getData();
  },[]); 
const handlechnage=(e)=>{
  setsearch(e.target.value);
}
  let filterdata=allData;
  if(search!=="")
  {
    filterdata = allData.filter((item) => {
      const { name, email, role } = item;
      return (
        name.toLowerCase().includes(search.toLowerCase()) ||
        email.toLowerCase().includes(search.toLowerCase()) ||
        role.toLowerCase().includes(search.toLowerCase())
      );
    });
  }
  
 
 
  return (  
    <>
    <Maindiv>
    <h1>Admin UI</h1>
    <input type="text"className="Search-bar" onChange={handlechnage} value={search} placeholder="Search by name,email or role" />
    <p>{allData.length} Total Records</p>
    </Maindiv>
    <Table allData={filterdata.slice(firstpage,lastpage)} setAllData={setAllData}/>
    <Pagination totalPages={[...Pages]} endpage={Math.ceil(allData.length/perpage)} page={page} currentPage={currentPage} />

    </>
  )
}
export default App
const Maindiv=styled.div`
padding:0px;
margin:0 auto;
max-width:1200px;
h1{
  width:100%;
  height:32px;
  padding:10px;
  border-radius:5px;
  font-size:40px;
  text-align:center;
  color:var(--Darkblue);
  
}
p{
  text-align:right;
  text-decoration:underline;
  text-shadow:2px 2px 4px rgba(0, 0, 0, 0.5);
}
.Search-bar{
  width:100%;
  height:32px;
  padding:10px;
  font-size:24px;
  border-radius:5px;
  text-align:center;  
  border:2px solid var(--Darkblue);
  background-color:var(--white);
  color:black;
  
}
`