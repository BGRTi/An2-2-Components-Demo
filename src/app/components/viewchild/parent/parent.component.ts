import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { ChildComponent } from './../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild('input') inputField: ElementRef;
  @ViewChild(ChildComponent) child: ChildComponent;
  @ViewChild('child') childComp: ElementRef;
  constructor() { }

  ngOnInit() {
    (<HTMLInputElement>this.inputField.nativeElement).value = 'Value From Parent';
    this.child.onClick();

    console.log(this.childComp);
  }


}