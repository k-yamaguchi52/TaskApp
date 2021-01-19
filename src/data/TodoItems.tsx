export type SaveProject = {
    title: string;
    todoItems: SaveTodoItem[];
}

export type SaveTodoItem = {
    id: number;
    title: string;
    date: Date;
    description: string;
    state: 'completed'|'working';
}

export type Project = {
    title: string;
}

export type TodoItem = {
    id: number;
    title: string;
    date: Date;
    description: string;
    state: 'completed'|'working';
    projectTitle: string;
}

export const project1 = {
    title: 'PJ1'
}

export const project2 = {
    title: 'PJ2'
}

export const project3 = {
    title: 'PJ3'
}

export const sampleProjectItems: Project[] = [
    
]

export const sampleTodoItems: TodoItem[] = [
    {
        id: 1,
        title: 'TODO1',
        date: new Date('2014-08-18T21:11:54'),
        description: '忘れないように',
        state: 'working',
        projectTitle: 'PJ1'
    },
    {
        id: 2,
        title: 'TODO2',
        date: new Date('2014-08-18T21:11:54'),
        description: '忘れないように',
        state: 'working',
        projectTitle: 'PJ1'
    },
    {
        id: 3,
        title: 'TODO3',
        date: new Date('2014-08-18T21:11:54'),
        description: '忘れないように',
        state: 'completed',
        projectTitle: 'PJ2'
    },
    {
        id: 4,
        title: 'TODO4',
        date: new Date('2014-08-18T21:11:54'),
        description: '忘れないように',
        state: 'working',
        projectTitle: 'PJ2'
    },
    {
        id: 5,
        title: 'TODO5',
        date: new Date('2014-08-18T21:11:54'),
        description: '忘れないように',
        state: 'completed',
        projectTitle: 'PJ3'
    },
    {
        id: 6,
        title: 'TODO6',
        date: new Date('2014-08-18T21:11:54'),
        description: '忘れないように',
        state: 'working',
        projectTitle: 'PJ3'
    }
];

export const Projects: SaveProject[] = [
    {
        title: 'プロジェクト１',
        todoItems: [
            {
                id: 1,
                title: 'TODO1',
                date: new Date('2014-08-18T21:11:54'),
                description: '忘れないように',
                state: 'working'
            },
            {
                id: 2,
                title: 'TODO2',
                date: new Date('2014-08-18T21:11:54'),
                description: '忘れないように',
                state: 'working'
            },
        ]
    },
    {
        title: 'プロジェクト２',
        todoItems: [
            {
                id: 3,
                title: 'TODO3',
                date: new Date('2014-08-18T21:11:54'),
                description: '忘れないように',
                state: 'working'
            },
            {
                id: 4,
                title: 'TODO4',
                date: new Date('2014-08-18T21:11:54'),
                description: '忘れないように',
                state: 'working'
            },
        ]
    },
    {
        title: 'その他',
        todoItems: [
            {
                id: 5,
                title: 'TODO5',
                date: new Date('2014-08-18T21:11:54'),
                description: '忘れないように',
                state: 'working'
            },
            {
                id: 6,
                title: 'TODO6',
                date: new Date('2014-08-18T21:11:54'),
                description: '忘れないように',
                state: 'working'
            }
        ]
    }
]