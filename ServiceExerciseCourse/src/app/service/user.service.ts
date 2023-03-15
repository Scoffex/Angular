import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  activeClick: number = 0;
  inactiveClick: number = 0;
  userActive = [
    {
      name: 'Anna',
      state: 'Set to inactive',
    },
    {
      name: 'Chris',
      state: 'Set to inactive',
    },
    {
      name: 'Manu',
      state: 'Set to inactive',
    },
    {
      name: 'Max',
      state: 'Set to inactive',
    },
  ];

  userInactive = [];

  changActiveStatus(id: number){
    this.userInactive[id].state = 'Set to active'
    this.userActive.push(this.userInactive[id]);
    this.userInactive.splice(id, 1);
    this.activeClick++;
    this.render();
    
  }
  
  render(){
    console.clear();
    console.log('ACTIVE ACTION DONE: ' + this.activeClick);
    console.log('INACTIVE ACTION DONE: ' + this.inactiveClick)
  }

  changInactiveStatus(id: number){
    this.userActive[id].state = 'Set to inactive'
    this.userInactive.push(this.userActive[id]);
    this.userActive.splice(id, 1);
    this.inactiveClick++;
    this.render();
    
  }


}
