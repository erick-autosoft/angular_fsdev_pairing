import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../../services/app-data.service';

@Component({
  selector: 'app-async-comp',
  standalone: true,
  imports: [],
  templateUrl: './async-comp.component.html',
  styleUrl: './async-comp.component.css'
})
export class AsyncCompComponent implements OnInit {
  descriptions: any;
  constructor(private appData: AppDataService) { }

  ngOnInit() {
    this.appData.getAsyncData();
  }

}
