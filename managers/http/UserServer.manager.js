const http              = require('http');
const express           = require('express');
const cors              = require('cors');
const app               = express();
const __headersMiddleware = require('../../mws/__headers.mw'); // Adjust the path if necessary

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

        app.get('/', (req, res) => {
            res.status(200).send('Something worked!')
        })

        app.use('/api', __headersMiddleware({
            meta: {},  // Provide any required data
            config: this.config,
            managers: this.userApi.managers  // Make sure to pass the necessary objects
        }));

        
        /** a single middleware to handle all */
        app.all('/api/:moduleName/:fnName', this.userApi.mw);

        let server = http.createServer(app);
        server.listen(this.config.dotEnv.USER_PORT, () => {
            console.log(`${(this.config.dotEnv.SERVICE_NAME).toUpperCase()} is running on port: ${this.config.dotEnv.USER_PORT}`);
        });
    }
}