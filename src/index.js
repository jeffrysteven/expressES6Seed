/* @flow */

import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from  './routes/routes';

const app = express();

app.use(express.static(__dirname + '/../public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes);

app.listen(3000, () => {
  console.log("Server listening in port 3000");
});
