import DeleteIcon from '@mui/icons-material/Delete'
import { DataContext } from './DataContext';
import {useContext} from 'react';


const DeleteItem = ({taskId, columnId}) => {
    const {listData, setListData} = useContext(DataContext)

    const deleteItem = () => {
        const tasks = Object.entries(listData.tasks)
        const columns = listData.columns[columnId]

        const filteredTasks = tasks.filter((item) => {
            if(item[0] !== taskId) return item
            else return null
        })

        const filteredTaskIds = columns.taskIds.filter((item) => {
            if(item !== taskId) return item
            else return null
        })

        const newTasks = Object.fromEntries(filteredTasks)

        const newColumn = {
            ...columns,
            taskIds: filteredTaskIds, 
        }

        const newData ={
            ...listData,
            tasks: newTasks,
            columns: {
                ...listData.columns,
                [newColumn.id]: newColumn,
            }
        }

        setListData(newData)
    }


    return (
        <div className="deleteIcon">
            <DeleteIcon onClick={() => {deleteItem()}}></DeleteIcon>
        </div>
    )
}

export default DeleteItem
