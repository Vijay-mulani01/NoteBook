import React from 'react'

export const Alert = (props) => {
    const capitalize = (word) => {
        if (word==="dnager"){
            word = "Error";
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);

    }
    return (
        <div style={{height:"$0px"}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dissmissible fade show`} role='alert'>
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert;