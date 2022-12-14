import React from 'react'
import { useStateContext } from '../context/StateContext'

const SelectOption = ({filter, title}) => {
  const {setChoose} = useStateContext('');

  return (
    <select defaultValue={title} onChange={(e)=>setChoose(e.target.value)}>
        <option disabled>{title}</option>
        {filter?.map((item)=><option value={item} key={item} >{item}</option>) }
    </select>
  )
}

export default SelectOption