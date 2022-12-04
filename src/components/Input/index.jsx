import React from 'react'
import { StyledInput } from './styles'

const Input = ({id, placeholder, type, register}) => {
  return (
    <StyledInput id={id} type={type} placeholder={placeholder} {...register(`${id}`)}/>
  )
}

export default Input