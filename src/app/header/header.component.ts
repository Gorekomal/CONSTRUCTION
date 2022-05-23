import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public images:any;
  public empData:any;
  public phone:number= +1718-999-3939;
  public date= new Date;
   public contact="contact@construction.com"  
 
  constructor() { }

  ngOnInit(): void {
    this.empData=[
      {
        img:"http://vprowand.com/html5/construction-template/demo/assets/img/logo-light@2x.png"
      }

    ]
  
  }

}
