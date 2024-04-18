import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { CountryISO,SearchCountryField } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  // separateDialCode = true;
	// SearchCountryField = SearchCountryField;
	// TooltipLabel = "";
	// CountryISO = CountryISO;
	// preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
	// phoneForm = new FormGroup({
	// 	phone: new FormControl(undefined, [Validators.required])
	// });

	// changePreferredCountries() {
	// 	this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	// }
 
  // (ngModelChange)="changeCountry($event);"
}
