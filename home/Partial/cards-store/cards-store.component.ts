import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-store',
  templateUrl: './cards-store.component.html',
  styleUrls: ['./cards-store.component.css']
})
export class CardsStoreComponent implements OnInit {

  constructor() { }

 FlagAll :true;
  FlagPlayStation :false;
  FlagAmazon :false;
  FlagXBOX :false;
  FlagRazer :false;
  FlagSteam :false;
  FlagOther :false;

/*

renderExternalScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
    return script;
  }*/
/*

document.querySelector('.featured-work ul li').addEventListener('click', function(){

	document.querySelector(this).classList.add('active').siblings().classList.remove('active');

	if(document.querySelector(this).data('class')==='all'){

document.querySelector('.shuffle-imgs  .col-md').css('opacity', 1);
}
else{


document.querySelector('.shuffle-imgs  .col-md').css('opacity', '0.08');

document.querySelector(document.querySelector(this).data('class')).parent().css('opacity', 1);



}

});


  */
  ngOnInit(): void {
}
}
