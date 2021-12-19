const Data = {
    tasks: {
        'task-1': {
            id: 'task-1',
            content: 'My task 1',
            description:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
        },
        'task-2': {
            id: 'task-2',
            content: 'My task 2',
        },
        'task-3': {
            id: 'task-3',
            content: 'My task 3',
            description:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy',
        },
        'task-4': {
            id: 'task-4',
            content: 'My task 4',
        },
        'task-5': {
            id: 'task-5',
            content: 'My task 5',
        },
        'task-6': {
            id: 'task-6',
            content: 'My task 6',
        },
    },

    columns: {
        incoming: {
            id: 'incoming',
            title: 'Incoming',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
        inprogress: {
            id: 'inprogress',
            title: 'In progress',
            taskIds: ['task-5', 'task-6'],
        },
        finished: {
            id: 'finished',
            title: 'Finished',
            taskIds: [],
        },
    },
    columnOrder: ['incoming', 'inprogress', 'finished'],
}

export default Data
