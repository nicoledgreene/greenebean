import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private apiService: ApiService
  ){}

  title = 'greenebean';

  public ngOnInit() {
    return this.apiService.getAllDriveData();
  }
}
