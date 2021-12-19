import {useState} from 'react';
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteItem from './DeleteItem'

const Container = styled.div`
    background-color: ${props => props.isDragging ? '#e85d04' : '#f48c06'};
    box-shadow: ${props => props.isDragging ? '0px 0px 26px 0px #e85d04' : null};
    transition: background-color 0.2s, box-shadow 0.2s;
`

const Description = styled.div`
    max-height: ${props => props.isDown ? '600px' : '0'};
    transition: max-height 0.2s;
`

const Task = (props) => {
    const [isDown, setIsDown] = useState(false);

    return(
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
                <Container className='task' {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} isDragging={snapshot.isDragging}>
                    <div className='task-main'>

                        {props.editItem && <DeleteItem taskId={props.task.id} columnId={props.columnId}/>}
                        <p>{props.task.content}</p>
                        {(props.task.description != null && (props.task.description).trim().length !== 0) 
                        && <ArrowDropDownIcon className={isDown ? 'arrow-up' : 'arrow-down'} onClick={() => setIsDown(!isDown)}></ArrowDropDownIcon>}
                    </div>
                    <Description className='description' isDown={isDown}>
                        <p>
                            {props.task.description}
                        </p>
                    </Description>
                </Container>
            )}
        </Draggable>
    )
}

export default Task