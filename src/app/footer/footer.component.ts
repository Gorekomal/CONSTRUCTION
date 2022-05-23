import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
public empData:any;
public info:any;
public case="History";
public case1="Team & Awards";
public case2="Community";
public case3="News & Events";
public case4="FAQ";
public case5="Contact Us";
public case6="Services"
public case7="DeliveryMethod"
public case8="Safty"
public case9="Sustanability"
public case10="Portfio"
public case11="Shop"


  constructor() { }

  ngOnInit(): void {
    
    this.empData=[
   {
     img :"http://vprowand.com/html5/construction-template/demo/assets/img/logo-light@2x.png"
    }

    ]
  }

  

}
