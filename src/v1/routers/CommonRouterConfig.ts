import express, { Router } from 'express';
import { VERSION } from '../../base/utils/Constants';
import { env } from '../../Env';
import { standardizePath } from '../utils/StringUtils';
export abstract class CommonRoutesConfig {
    app: express.Application;
    router: Router = Router();
    name: string;

    constructor(app: express.Application, name: string, path:string = null) {
        this.app = app;
        this.name = name;
        if(path == null){
            path = name;
        }
        
        this.configureRoutes();        
        this.app.use(`${standardizePath(env.app.rootPath)}/${path}`, this.router);
    }
    getName() {
        return this.name;
    }

    abstract configureRoutes(): void;

}