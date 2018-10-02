import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'craft-semantic-dropdown',
  templateUrl: './semantic-dropdown.component.html',
  styleUrls: ['./semantic-dropdown.component.scss']
})
export class SemanticDropdownComponent implements OnInit {
  @Input() public multiple = false;
  @Input() public name: '';
  @Input() public customClasses: '';
  @Input() public items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
