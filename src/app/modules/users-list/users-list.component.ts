import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  selectedEntities: any[];
  private data: any[];
  constructor() { }

  ngOnInit() {
  }

  public setSelectedEntities($event: any) {
    this.selectedEntities = $event;
}
}
