import './UserDataTable.css';
import User from './User';

export default function UserDataTable(InputProps) {
    const currentData = InputProps.currentData;
    const selectId = InputProps.selectId;
    const setSelectId = InputProps.setSelectId;
    const pageData = InputProps.pageData;
    const pageNum = InputProps.pageNum;
    const singleDelete = InputProps.singleDelete;
    const allCheck = InputProps.allCheck;
    const setAllCheck = InputProps.setAllCheck;

    function checker(e){
        setAllCheck(e.target.checked);
        const temp = currentData.map((user) => user.id);
        setSelectId(temp);
    }

    function UsersLogic(){
        if(currentData.length === 0){
            return (
                <></>
            );
        }
        return (
            <>
                {Array.from(currentData).map((_, index) => (
                    <User key={currentData[index].id} user={currentData[index]} index={index} selectId={selectId} setSelectId={setSelectId}
                    pageNum={pageNum} pageData={pageData} singleDelete={singleDelete} allCheck={allCheck}/>
                ))}
            </>
        );
      }
  return (
    <>
        <div className='header'>
            <div ><b><input type="checkbox" onChange={checker} checked={allCheck}/></b></div>
            <div ><b>Name</b></div>
            <div ><b>Email</b></div>
            <div ><b>Role</b></div>
            <div ><b>Actions:</b></div>
        </div>
     <UsersLogic />
    </>
  )
}
