import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

showMe:boolean=true

  constructor() { }

  ngOnInit(): void {
  }


toggelMe(){
  this.showMe=! this.showMe
}
}
