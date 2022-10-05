import express, {Request, Response, NextFunction} from 'express';
import userRouter from './infrastructure/router/user';
import morgan from 'morgan';


const app = express();

app.use(morgan("dev"))

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// ** Add Router **
app.use('/', userRouter);

// app.use(express.static());
export default app;
