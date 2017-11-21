import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit() {
  constructor(private _httpService: Http) { }

  title = 'Angular Fitness App';
  apiValues: string[] = [];
  ngOnInit() {
    this._httpService.get('/api/derp').subscribe(values => {
      this.apiValues = values.json() as string[];
    });
  }
}
