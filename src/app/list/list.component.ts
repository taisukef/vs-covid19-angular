import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  vscoviddata: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const key = '2PACX-1vSFMNp5HcRNOF5MrAujEUWR1dIoX2mncMEWTbPlVAaJqKWiq831-6gnCyI7n_G8YfPqNQXrfwyVjyHL'
    const url = 'https://app.sabae.cc/api/googlespreadsheet.json?key=' + key
    //const url = 'http://localhost:8003/api/googlespreadsheet.json?key=' + key
    this.http.get(url).subscribe((data: any) => {
      this.shuffle(data)
      this.vscoviddata = data
      console.log(data)
    })
  }
  rnd(n: number): number {
    return Math.floor(Math.random() * n)
  }
  shuffle(ar): void {
    for (let i = 0; i < ar.length; i++) {
      const n = this.rnd(ar.length)
      const tmp = ar[i]
      ar[i] = ar[n]
      ar[n] = tmp
    }
  }
}
