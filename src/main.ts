import {Server, ServerCredentials } from 'grpc';
import {UsersService} from './generated/user_grpc_pb';
import {UsersServer} from './server/userService';
import {User} from './generated/user_pb';

const server = new Server();
server.addService(UsersService, new UsersServer());
const port = 3000;
const uri = `localhost:${port}`;
console.log(`Listening on ${uri}`);
server.bind(uri, ServerCredentials.createInsecure());
server.start();