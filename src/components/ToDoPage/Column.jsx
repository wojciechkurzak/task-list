import './style.scss'
import {useState} from 'react';
import {Droppable} from 'react-beautiful-dnd'
import Task from './Task'
import AddItem from './AddItem';
import styled from 'styled-components'
import EditIcon from '@mui/icons-material/Edit';

const Container = styled.div`
    background-color: ${props => props.isDraggingOver ? '#CCCCC8' : '#03071e'};
    transition: background-color 0.2s;
`


const Column = (props) => {
    const [editItem, setEditItem] = useState(false)

    return(
        <div className='container'>
            <h2>{props.column.title}</h2>
            <div className='editIcon'>
                <EditIcon onClick={() => {setEditItem(prev => !prev)}}></EditIcon>
            </div>
            <Droppable droppableId={props.column.id}>
                {(provided, snapshot) => {
                    return(
                    <>
                    <Container className='column' ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
                        {props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} editItem={editItem} columnId={props.column.id}/>)}
                        {provided.placeholder}
                    </Container>
                    <AddItem columnId={props.column.id}/>
                    </>
                    )
                
                }}
            </Droppable>
        </div>
    )
}

export default Column