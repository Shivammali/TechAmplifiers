import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  constructor(private router:Router , private route:ActivatedRoute){}
reloadPage(){
  console.log(ThisReceiver)
  //absolutePath
  this.router.navigate(["/report"])
}
openPage(){
  //relativePath
  this.router.navigate([''],{relativeTo:this.route} );
}
}
