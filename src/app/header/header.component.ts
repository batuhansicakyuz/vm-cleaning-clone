import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-root',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 constructor(
    private router:Router
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'ng_clone_online_reader';

}
