import React, {useState} from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

 const ItemsList = ({items}) => {

    const [selectedItems, setSelectedItems] = useState([])
    console.log(selectedItems)

    function handleItemSelected(item){
       
        if(selectedItems.includes(item)){
            setSelectedItems(selectedItems.filter( name => name !== item))
            console.log(selectedItems.filter( name => name !== item))
        }else{
            setSelectedItems([...selectedItems, item])
            console.log([...selectedItems, ...[item]])
        }
    }
     return (
            <div className='container'>
            <ul className='item-list'>
            {items.map(item =>  (
                <li
                key={item}
                className='listed-item'
                onClick={() => {handleItemSelected(item)}}
                >
                {item}
                <span className='star'>
                    {selectedItems.includes(item)
                    ? '★'
                    : '☆'}
                </span>
                </li>
            ))}
            </ul>
            <div className='list-items'>
            <p>My Items:</p>
            <TransitionGroup component={null}>
                {selectedItems.map(item => (
                    <CSSTransition
                    timeout={500}
                    classNames='fade'
                    key={item}
                    >
                    <li className='selected-item'>{item}</li>
                    </CSSTransition>
                )
                )}
            </TransitionGroup>
            </div>
        </div>
        )
    }

 export default ItemsList