import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./pages/navbar/navbar.component";
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  daten: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getDaten().subscribe((data) => {
      this.daten = data;
    });
  }
}
