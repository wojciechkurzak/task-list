import {useState} from 'react';
import Data from './Data'
import Column from './Column'
import {DragDropContext} from 'react-beautiful-dnd'
import { DataContext } from './DataContext';

const Todo = () => {
    const [listData, setListData] = useState(Data)

    const onDragEnd = (result) =>{
        const {destination, source, draggableId} = result

        if(!destination) return

        if(destination.droppableId === source.droppableId
            && destination.index === source.index) return
        
        if(destination.droppableId === source.droppableId){
        const column = listData.columns[source.droppableId]
        const taskIds = [...column.taskIds]
        taskIds.splice(source.index, 1)
        taskIds.splice(destination.index, 0, draggableId)

        const newColumn = {
            ...column,
            taskIds: taskIds
        }

        const newListData = {
            ...listData,
            columns: {
                ...listData.columns,
                [newColumn.id]: newColumn,
            }
        }

        setListData(newListData)
        }

        else{
            const column = listData.columns[source.droppableId]
            const secondColumn = listData.columns[destination.droppableId]
            const taskIds = [...column.taskIds]
            const secondTaskIds = [...secondColumn.taskIds]
            taskIds.splice(source.index, 1)
            secondTaskIds.splice(destination.index, 0, draggableId)

            const newColumn = {
                ...column,
                taskIds: taskIds,
            }

            const newSecondColumn = {
                ...secondColumn,
                taskIds: secondTaskIds,
            }

            const newListData = {
                ...listData,
                columns: {
                    ...listData.columns,
                    [newColumn.id]: newColumn,
                    [newSecondColumn.id]: newSecondColumn,
                }
            }

        setListData(newListData)
        }
    }

    return(
        <DataContext.Provider value={{listData, setListData}}>
            <div className='todo-wrapper'>
                <DragDropContext onDragEnd={onDragEnd}>
                    {listData.columnOrder.map((columnId) => {
                        const column = listData.columns[columnId]
                        const tasks = column.taskIds.map((taskId) => listData.tasks[taskId] )
                        return <Column key={column.id} column={column} tasks={tasks} />
                    })}
                </DragDropContext>
            </div>
        </DataContext.Provider>
    )
}

export default Todo