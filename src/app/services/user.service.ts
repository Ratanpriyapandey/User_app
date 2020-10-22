import { Injectable } from '@angular/core';
import { List } from '../model/user';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserListService {
  public userList: List[] = [];
  constructor(private httpClient:HttpClient) { }

  getAlluserList(): List[] {
    if(localStorage.getItem('localData') !== null){
     this.userList = JSON.parse(localStorage.getItem('localData'));
    } else {
      this.httpClient.get("https://jsonplaceholder.typicode.com/users").subscribe(data =>{
      //  console.log(data);
        localStorage.setItem('localData', JSON.stringify(data));
        this.userList = JSON.parse(localStorage.getItem('localData'));
      })
    }
    return this.userList;
  }
  
getAfterRefresh():List[]
{
   this.httpClient.get("https://jsonplaceholder.typicode.com/users").subscribe(data =>{
    console.log(data);
    console.log(this.userList);
    localStorage.setItem('localData', JSON.stringify(data));
    this.userList = JSON.parse(localStorage.getItem('localData'));
  })
  return this.userList;
}
  getUserById(id: number): List {
    var userArray = JSON.parse(localStorage.getItem('localData'));
    return userArray
    .filter(users => users.id === id)
    .pop();
    console.log(id)

  }

updateUserById(users): List {
  if (users.id === 0) {
    var userArray = JSON.parse(localStorage.getItem('localData'));
    var userId = userArray.length;
    users.id = ++userId;
    userArray.push(users);
    localStorage.setItem('localData', JSON.stringify(userArray));
  } else {
    var  userArray = JSON.parse(localStorage.getItem('localData'));
    for (var i in  userArray) {
      if ( userArray[i].id === users.id) {
        userArray[i] = users;
        localStorage.setItem('localData', JSON.stringify( userArray));
      }
    }
  }
  return users;
}

deleteUserDetail(id) {
  var userArray = JSON.parse(localStorage.getItem('localData'));
  for (var i in userArray) {
    if (userArray[i].id === id) {
      userArray.splice(i, 1);
      localStorage.setItem('localData', JSON.stringify(userArray));
    }
  }
};
}
