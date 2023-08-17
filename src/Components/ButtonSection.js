import React from 'react';
import './ButtonSection.css';

export default function ButtonSection(InputProps) {
    const pageNum = InputProps.pageNum;
    const setPageNum = InputProps.setPageNum;
    const totalPages = InputProps.totalPages;
    const deleteAllSelected = InputProps.deleteAllSelected;

    function paginationLogic(){
        const button = [];
        button.push(
            <button className={pageNum === 1 ? "page active" : "page btn"} key="first" onClick={() => setPageNum(1)}>
                First
            </button>
        );
        button.push(
            <button className={pageNum === 1 ? "disabled page" : "page btn"} key="prev" onClick={() => setPageNum(pageNum-1)}>
                Prev
            </button>
            );
        for(let page=1;page<=totalPages;page++){
            button.push(
                <button className={pageNum === {page} ? "page active" : "page btn"} key={page} onClick={() => setPageNum(page)}>
                {page}
                </button>
                );
        }

        button.push(
            <button className={pageNum === totalPages ? "page disabled" : "page btn"} key="next" onClick={() => setPageNum(pageNum+1)}>
                Next
            </button>
            );
        button.push(
            <button className={pageNum === totalPages ? "page active" : "page btn"} key="last" onClick={() => setPageNum(totalPages)}>
                Last
            </button>
            );
        return button;
    }

  return (
    <div className='footer'>
        <div className='delete'>
            <button className='deleteButton' onClick={()=>deleteAllSelected()} >Delete Selected</button>
        </div>
       <div className='pages'>{paginationLogic()}</div>
    </div>
  )
}
