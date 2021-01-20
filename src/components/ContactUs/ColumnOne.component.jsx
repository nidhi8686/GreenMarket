import React from 'react'

export default function ColumnOne(props) {
    return (
        <div>
            <div className="row">
                    <div className="col-2 p-2">
                        <i className={`fa ${props.contact.fa} text-danger fa-2x`}></i>
                    </div>
                    <div className="col-10 p-0">
                        <h6>{props.contact.name}</h6>
                        <p>{props.contact.content}</p>
                    </div>
                </div>
        </div>
    )
}
