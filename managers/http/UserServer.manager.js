const http              = require('http');
const express           = require('express');
const cors              = require('cors');
const app               = express();

// const classRoomController = require('../models/classrooms/classroom.controller')
const classroomRoutes = require('../models/classrooms/classroom.routes');
const schoolRoutes = require('../models/schools/school.routes');
const studentRoutes = require('../models/students/student.routes');

module.exports = class UserServer {
    constructor({config, managers}){
        this.config        = config;
        this.userApi       = managers.userApi;
    }
    
    /** for injecting middlewares */
    use(args){
        app.use(args);
    }

    /** server configs */
    run(){
        app.use(cors({origin: '*'}));
        app.use(express.json());
        app.use(express.urlencoded({ extended: true}));
        app.use('/static', express.static('public'));

        /** an error handler */
        app.use((err, req, res, next) => {
            console.error(err.stack)
            res.status(500).send('Something broke!')
        });

        // app.post('/classrooms',classRoomController.createClassroom)

        /** Register routes */
        app.use('/classrooms', classroomRoutes); // Use classroom routes
        app.use('/schools', schoolRoutes);       // Use school routes
        app.use('/students', studentRoutes);     // Use student routes
        
        /** a single middleware to handle all */
        app.all('/api/:moduleName/:fnName', this.userApi.mw);
        app.get('/', (req, res) => {
            res.status(200).send('Something worked!')
        })
        

        let server = http.createServer(app);
        server.listen(this.config.dotEnv.USER_PORT, () => {
            console.log(`${(this.config.dotEnv.SERVICE_NAME).toUpperCase()} is running on port: ${this.config.dotEnv.USER_PORT}`);
        });
    }
}