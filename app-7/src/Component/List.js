import React, {useState} from 'react'
import Todo from './Todo'

const List = (props) => {
    
       let list = props.tasks.map((element,index) => {
           return <Todo key={index} task={element} />
       })
       return <div>{list}</div>
    
}

export default List