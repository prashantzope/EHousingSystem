import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'field-error-display',
  templateUrl: './error-display.component.component.html',
  styleUrls: ['./error-display.component.component.css']
})
export class FiledErrorDisplayComponent implements OnInit {

  constructor() { }

  @Input() errorMessage : string;
  @Input () displayError: boolean;

  ngOnInit() {
  }

}
