import React from 'react'
import './Board.css';

function Board(props) { 

    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id'); 
    }

    return (
        <div className='ulDiv'>
            <ul>
            {
                props.children.map((isiData)=>{
                    // console.log(isiData.judul)
                    return <li key={isiData.id}>{isiData.judul}</li>
                })
            }
            </ul>
        </div>
    )
}

export default Board