import { Component } from '@angular/core';

@Component({
  selector: 'app-enq',
  templateUrl: './enq.component.html',
  styleUrls: ['./enq.component.css']
})
export class EnqComponent {
  // string interpolation
name: String ="Akshay";
//property bindng
inputType ="file"
placename ="shivam enter the data"
//  Event binding
studentName="";
//2way data binding
onClickEv(name:string){
  console.log("Hi there"+ name);
  
}
enqDetails:any= [];

enqDetail:any={name:"Akshay",course:"Angular",
date:"22-may-2023",contact:"779854469"};
students:string[]=["Akshay","manya","rudra","Archit","shivam"]
marks:number[]=[10,20,50,100,25]
ids:number[]=[1,2,3,4,5]

}
