const assert = require('assert');
const chai = require('chai');
const chaiHTTP = require('chai-http');
const server = require('../app');
const should = chai.should();

chai.use(chaiHTTP);
describe('Tasks', () => {

    describe('CRUD OPERATIONS', () => {
        var _id = '';

        let task = {
            'title': 'Llevar niños a Judo', 
            'tags': ["Judo", "niños"],
            'description': 'Llevar el miécoles a las 18:00 los niños a judo', 
            'state': 'todo'
        }

        it('Should add tasks in DB', (done) => {
            
            chai.request(server)
                .post('/api/tasks/newtask')
                .send(task)
                .end((err, res) => {
                    res.should.have.status(201);
                    console.log('Response Body:', res.body);
                    console.log('taskId added:', res.body.result._id);
                    _id = res.body.result._id;
                })
                done();
        });

        it('should Fetch all tasks', (done) => {
            chai.request(server)
                .get('/api/tasks')
                .end((err, result) => {
                    result.should.have.status(200);
                    console.log('Got', result.body);
                    console.log('Got', result.body.result.length, ' tasks');
                })
                done();
        });
        
        

        it('Should Fetch a particular task', (done) => {
            chai.request(server)
                .get('/api/tasks/' + _id)
                .end((err, result) => {
                    result.should.have.status(200);
                    console.log('Fetched Particular task using /GET/:TASKID ::::', result.body);
                    done();
                })
        });

        it('Should update a particular task', (done) => {
            let updatedTask = {
                'title': 'Llevar niños a Natación', //title is changed
                'tags': ["Judo", "niños"], 
                'description': 'Llevar el miécoles a las 18:00 los niños a judo', 
                '_id': _id
            }

            chai.request(server)
                .put('/api/tasks/updatetask')
                .send(updatedTask)
                .end((err, res) => {
                    res.should.have.status(201);
                    console.log('Updated Particular task using /PUT/updatetask/ ::::', res.body);
                    done();
                })
        });

        it ('Should check data updated in DB', (done)=>{
            chai.request(server)
                .get('/api/tasks/' + _id)
                .end((err, result)=>{                    
                    result.should.have.status(200)                
                    result.body.result.title.should.eq('Llevar niños a Natación');
                    console.log("Fetched Particlar task using /GET/:TASKID ::::", result.body)    
                    done()
                })
        })

        it('Should Delete Particular task', (done)=>{
            chai.request(server)
                .delete("/api/tasks/deletetask")
                .send({_id:_id})
                .end((err, res)=>{                    
                    res.should.have.status(200);                
                    console.log("Deleted Particlar Book using /DELETE/DELETETASK ::::", res.body);    
                    done()
                })
        })

        it("Should confirm delete with number of taks from DB", (done)=>{
            chai.request(server)
                .get("/api/tasks/")
                .end((err, result)=>{
                    result.should.have.status(200);
                    result.body.result.length.should.eq(0);
                    console.log ("Got",result.body.result.length, " tasks")
                    done()
                })
        })

    })
})