import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() openClose!: boolean;
  showSidebar: boolean = false;;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
