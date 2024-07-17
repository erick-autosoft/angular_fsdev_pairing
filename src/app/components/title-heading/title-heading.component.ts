import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  standalone: true,
  selector: 'app-title-heading',
  providers: [MenuService],
  templateUrl: './title-heading.component.html',
})
export class TitleHeadingComponent implements OnInit {
  title: string;
  constructor(private menu: MenuService) {
    this.title = this.menu.getTitle();
  }

  ngOnInit() {
    this.title = 'title';
  }
}
