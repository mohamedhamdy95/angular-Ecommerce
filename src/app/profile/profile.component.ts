import { Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit , OnDestroy {
  constructor(){
    console.log("this constructor")
  }

ngOnInit(): void {
  console.log("this ngOnInit") 
}

ngOnDestroy(): void {
  console.log("this ngOnDestroy") 
}

}
