import React from 'react'

export default function FooterItem({ title, children}) {
  return (
    <div className='item'>
      <h3 className='title'>{title}</h3>
        {children}
    </div>
  )
}
