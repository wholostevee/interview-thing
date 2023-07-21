import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import { fileURLToPath } from 'url';
import { mathematicalResponse } from './requestHandler.js';

const application = express();

const fileName = fileURLToPath(import.meta.url);
const directoryname = path.dirname(fileName);

application.use(bodyParser.json());

application.get('/add', (_, response) => response.sendFile(directoryname + '/index.html'));
application.post('/add', ({ body: { a, b } }, response) => response.end(JSON.stringify({ response: mathematicalResponse(a, b) })));

application.listen(5500, '127.0.0.1', () => console.log('Listening to 3000.'));
