import React from 'react'

const MenuList = ({items}) => (
    <div>
            {
            items.map( item =>  <div className='menu-item' > {item} </div>)
            }
    </div>
)
export default MenuList