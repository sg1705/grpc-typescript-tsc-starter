import {User} from './generated/user_pb';

const user = new User();
user.setName('test');
console.log(user.getName());
