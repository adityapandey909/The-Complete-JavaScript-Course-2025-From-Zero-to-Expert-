'use strict';

function auth(name, email, role) {
  const DB = {
    login: false,
    open: false,
    close: true,
  };
  const user = {
    name: name,
    email: email,
    role: role,
    is_allowed: DB.login,
    not_Allowed: DB.not_Allowed
  };
  if (user.is_allowed) {
    if (user.role == 'manager') {
      console.log('Accounts permission given');
      return user;
    } else if (user.role == 'waiter' && DB.open) {
      console.log('Please collect order and report to manager');
      return user;
    } else if (user.role == 'chef' && DB.open) {
      console.log('Kitchen permission allowed');
      return user;
    } else if (user.role == 'guest' && DB.close) {
      console.log('No guest allowed');
      return user;
    } else if (user.role == 'payment' && DB.)
  } else {
    console.log('Login is denied');
  }
}

const query_1 = auth('Aditya', 'adityapandeycontact@gmail.com', 'guest');
console.log(query_1);
