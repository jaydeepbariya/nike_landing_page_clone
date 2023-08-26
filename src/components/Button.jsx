import React from 'react'

const Button = ({label, iconUrl, active}) => {
  return (
    <button className={`flex justify-center gap-2 items-center px-4 py-2 font-montserrat ${active===true ? "bg-white ring-1":"bg-coral-red"} rounded-full`}>
        <p>{label}</p>
        <img src={iconUrl} />
    </button>
  )
}

export default Button