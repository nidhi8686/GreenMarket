import React from 'react'

export default function ColumnTwo(props) {
    return (
        
            <div className="row">
                    <div className="col-2"><i className={`fa ${props.data.fa} fa-2x text-danger`}></i></div>
                    <div className="col-10 pl-0"><h6>FOLLOW US ON {props.data.content}</h6></div>
                </div>
        
    )
}
