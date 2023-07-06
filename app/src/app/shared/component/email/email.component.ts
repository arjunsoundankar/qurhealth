import { Component, OnInit } from '@angular/core';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  public emailData: any = [];
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    
    this.appService.getEmail().subscribe(res => {
      if(res.isSuccess) {
        this.emailData = res.payload;
    }
    });
  }

}
