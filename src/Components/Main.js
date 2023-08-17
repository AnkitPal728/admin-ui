import Searchbar from './Searchbar';
import UserDataTable from './UserDataTable';
import ButtonSection from './ButtonSection';
import React, { useEffect, useState } from "react";
import axios from "axios";
import './Main.css'

function Main() {
    const [userData, setUserData] = useState([]);
    const [pageData, setPageData] = useState([]);
    const [selectId, setSelectId] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [allCheck, setAllCheck] = useState(false);

    const API_URL = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
    useEffect(() => {
        performAPICall();
      },[]);
    
      const performAPICall = async () => {
        (async () => {
          const response = await axios({
            url: API_URL,
            method: 'get'
          })
          setUserData(response.data);
          setPageData(response.data);
        })()
      };

      function deleteAllSelected(){
        const updatedUsers = pageData.filter(
          (user) => !selectId.includes(user.id)
        );
        setUserData(updatedUsers);
        setPageData(updatedUsers);
        setSelectId([]);
        setAllCheck(false);
      }
      const singleDelete = (id) => {
        setPageData((prevPageData) =>
            prevPageData.filter((user) => user.id !== id)
         );
      }
    
      const currentData = pageData.slice((pageNum-1)*10, ((pageNum-1)*10)+10);
      const totalPages = Math.ceil(pageData.length / 10);

  return (
    <div className='main'>
      <Searchbar userData={userData} setPageData={setPageData} setPageNum={setPageNum}/>
      <UserDataTable currentData={currentData} pageData={pageData} selectId={selectId} 
      setSelectId={setSelectId} pageNum={pageNum} singleDelete={singleDelete} allCheck={allCheck}
      setAllCheck={setAllCheck}/>
      <ButtonSection deleteAllSelected={deleteAllSelected} pageNum={pageNum} setPageNum={setPageNum} 
      totalPages={totalPages}/>
    </div>
  );
};

export default Main;