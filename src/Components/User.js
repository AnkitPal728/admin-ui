import React, { useState } from "react";
import './User.css';
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

export default function User(InputProps) {
    const user = InputProps.user;
    const id = user.id;
    const name = user.name;
    const email = user.email;
    const role = user.role;
    const index = InputProps.index;
    const setSelectId = InputProps.setSelectId;
    const selectId = InputProps.selectId;
    const pageData = InputProps.pageData;
    const pageNum = InputProps.pageNum;
    const singleDelete = InputProps.singleDelete;
    const allCheck = InputProps.allCheck;
    
    const [checked, setChecked] = useState(false); 
    const [edit, setEdit] = useState(false); 
    const [values, setValues] = useState({name:name,email:email,role:role});

    function handleChange(e) {
       setChecked(e.target.checked);
       const arr = selectId;
       if(e.target.checked === true){
        arr.push(e.target.id);
        setSelectId(arr);
       }
       if(e.target.checked === false){
        arr.splice(arr.indexOf(e.target.id),1);
        setSelectId(arr);
       }
    }

    const clickHandlerEdit = (id) =>{
        setEdit(true);
    }

    function saver(){
        pageData[index + (pageNum - 1)*10].name = values.name;
        pageData[index + (pageNum - 1)*10].email= values.email;
        pageData[index + (pageNum - 1)*10].role = values.role;
        setEdit(false);
    }

    const editHandleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setValues({...values, [name]: value});
      }

    function EditLogic(){
        if(edit === true){

            return (
                <>
                <input type="text" name="name" value={values.name} onChange={editHandleChange} autoFocus/>
                <input type="text" name="email" value={values.email} onChange={editHandleChange} autoFocus/>
                <input type="text" name="role" value={values.role} onChange={editHandleChange} autoFocus/>
                <div >
                <button id={index} onClick={saver}>Save</button>
                </div>
                </>
            );
        }
        return (
            <>
            <div className="edit">{name}</div>
            <div className="edit">{email}</div>
            <div className="edit">{role}</div>
            <div >
                <FiEdit onClick={() => clickHandlerEdit(index)}/>
                <AiOutlineDelete onClick={() => singleDelete(id)}/>
            </div>
            </>
        );
    }

  return (
    <>
        <div className={checked || allCheck === true ? "table selected" : "table"} id={index}>
            <div ><input type="checkbox" onChange = {handleChange} id={id} checked={allCheck || checked}/></div>
            <EditLogic />
        </div>
        <hr className="sty"/>
    </>
  )
}
