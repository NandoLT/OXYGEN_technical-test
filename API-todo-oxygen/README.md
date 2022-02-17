# API TODO_OXYGEN


## Tests results
```
> mocha



  Tasks
    CRUD OPERATIONS
Connected to mongodb at todo_oxygen
      ✔ Should add tasks in DB
      ✔ should Fetch all tasks
POST /api/tasks/newtask 201 39.575 ms - 175
Response Body: {
  result: {
    title: 'Llevar niños a Judo',
    tags: [ 'Judo', 'niños' ],
    description: 'Llevar el miécoles a las 18:00 los niños a judo',
    _id: '620ec75d33d98ce98e539ed7',
    __v: 0
  }
}
taskId added: 620ec75d33d98ce98e539ed7
GET /api/tasks 200 16.573 ms - 177
Got {
  result: [
    {
      _id: '620ec75d33d98ce98e539ed7',
      title: 'Llevar niños a Judo',
      tags: [Array],
      description: 'Llevar el miécoles a las 18:00 los niños a judo',
      __v: 0
    }
  ]
}
Got 1  tasks
GET /api/tasks/620ec75d33d98ce98e539ed7 200 4.958 ms - 175
Fetched Particular task using /GET/:TASKID :::: {
  result: {
    _id: '620ec75d33d98ce98e539ed7',
    title: 'Llevar niños a Judo',
    tags: [ 'Judo', 'niños' ],
    description: 'Llevar el miécoles a las 18:00 los niños a judo',
    __v: 0
  }
}
      ✔ Should Fetch a particular task
PUT /api/tasks/updatetask 201 11.085 ms - 180
Updated Particular task using /PUT/updatetask/ :::: {
  result: {
    _id: '620ec75d33d98ce98e539ed7',
    title: 'Llevar niños a Natación',
    tags: [ 'Judo', 'niños' ],
    description: 'Llevar el miécoles a las 18:00 los niños a judo',
    __v: 0
  }
}
      ✔ Should update a particular task
GET /api/tasks/620ec75d33d98ce98e539ed7 200 3.674 ms - 180
Fetched Particlar task using /GET/:TASKID :::: {
  result: {
    _id: '620ec75d33d98ce98e539ed7',
    title: 'Llevar niños a Natación',
    tags: [ 'Judo', 'niños' ],
    description: 'Llevar el miécoles a las 18:00 los niños a judo',
    __v: 0
  }
}
      ✔ Should check data updated in DB
DELETE /api/tasks/deletetask 200 6.364 ms - 63
Deleted Particlar Book using /DELETE/DELETETASK :::: { result: 'Task 620ec75d33d98ce98e539ed7 deleted successfully' }
      ✔ Should Delete Particular task
GET /api/tasks/ 200 2.577 ms - 13
Got 0  tasks
      ✔ Should confirm delete with number of taks from DB


  7 passing (198ms)
```