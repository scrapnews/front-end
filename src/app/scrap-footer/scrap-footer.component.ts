import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrap-footer',
  templateUrl: './scrap-footer.component.html',
  styleUrls: ['./scrap-footer.component.css']
})
export class ScrapFooterComponent implements OnInit {

  dateFooter : number = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
