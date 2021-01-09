import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from './inversify.config';
import * as bodyParser from 'body-parser';

let server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
});

let app = server.build();
const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}...`)
});
