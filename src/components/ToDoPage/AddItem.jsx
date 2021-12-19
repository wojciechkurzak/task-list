import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import {useState, useContext} from 'react';
import { DataContext } from './DataContext';
import CustomTextField from './CustomTextField';
import CustomButton from './CustomButton';
import { v4 as uuidv4 } from 'uuid';

const AddItem = ({columnId}) => {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const {listData, setListData} = useContext(DataContext)

    const AddItem = () => {
        if(name.trim().length !== 0){
            const uuid = uuidv4();
            const tasks = listData.tasks
            const column = listData.columns[columnId]

            let newTasks = Object.entries(tasks)
            newTasks.push([uuid, {id: uuid, content: name, description: description}])
            newTasks = Object.fromEntries(newTasks)

            column.taskIds.push(uuid)

            const newData = {
                ...listData,
                tasks: newTasks,
                columns:{
                    ...listData.columns,
                    [column.id]: column,
                }
                
            }

            setListData(newData)
            setName('')
            setDescription('')
            setOpen(false)
        }
        
        else{
            alert('Invalid name')
            setName('')
            setDescription('')
        }
    }

    return(
        <>
            <div className='addItem' onClick={() => setOpen(true)}>
                <AddIcon></AddIcon>
            </div>
            <Modal open={open} onClose={() => setOpen(false)} sx={{ backgroundColor: 'rgba(0,0,0,0.5)', transition: '0.6s'}}>
                <div className='addItemForm'>
                    <h3>New task</h3>
                    <CustomTextField value={name} onChange={(e) => setName(e.target.value)} label="Task name" id="custom-outlined-input" fullWidth/>
                    <CustomTextField value={description} onChange={(e) => setDescription(e.target.value)} label="Description (optional)" id="custom-outlined-textarea"  multiline={true} rows='4' fullWidth/>
                    <CustomButton variant="contained" onClick={() => {AddItem()}}>Add</CustomButton>
                </div>
            </Modal>     
        </>
    )
}

export default AddItem