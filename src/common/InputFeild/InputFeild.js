import React from 'react'

const InputFeild = ({Requrried , Error , Label , OnChange , Value , PlaceHolder , ClassName , Name , Type ,Id , Checked}) => {
  return (
    <>
        <label htmlFor={Label} className="form-label">{Label}</label>
        <input 
            value={Value}
            placeholder={PlaceHolder}
            onChange= {OnChange}
            className={ClassName}
            name ={Name}
            type={Type}
            id = {Id}
            checked = {Checked}
          />
          {
            <p style={{color: 'red'}}>{Error}</p>
          }
        
    </>
  )
}

export default InputFeild