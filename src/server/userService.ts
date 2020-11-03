import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { ServerUnaryCall, sendUnaryData, handleServerStreamingCall, ServerWritableStream, handleClientStreamingCall, ServerReadableStream } from 'grpc';
import {IUsersServer} from '../generated/user_grpc_pb';
import { UserRequest, User, CreateUsersResponse } from '../generated/user_pb';

export class UsersServer implements IUsersServer {

    /**
     * Streaming input, unary response
     * To end input stream, look for 'end' on client
     * 
     * @param call 
     * @param callback 
     */
    createUsers(call: ServerReadableStream<UserRequest>, callback: sendUnaryData<CreateUsersResponse>) {
        let users = new CreateUsersResponse();
        call.on('data', (userRequest:UserRequest) => {
            let newUser = new User();
            newUser.setId(userRequest.getId());
            newUser.setName('new user:'+newUser.getId());
            users.addUser(newUser);
        });
        call.on('end', () => {
            console.log('users create:', users);
            callback(null, users);
        })
        
    }


    /**
     * Example of a streaming response that takes an Empty input
     * 
     * @param call writeable call stream. It has write() and end() to manage the stream
     */
    getUsers(call: ServerWritableStream<Empty>) {
        for (let ii=0; ii<10; ii++) {
            let newUser = new User();
            newUser.setId(ii);
            newUser.setName('new user:'+ii);
            call.write(newUser);
        }
        call.end();
    }

    // example of a method that takes streaming input
    

    /**
     * 
     * @param call Example of a method that takes a unary input and has unary response
     * @param callback 
     */
    getUser(call: ServerUnaryCall<UserRequest>, callback: sendUnaryData<User>) {
        let newUser = new User();
        newUser.setId(call.request.getId());
        newUser.setName('new user 1');
        console.log('user is:', newUser);
        callback(null, newUser);
        return;
    }
}