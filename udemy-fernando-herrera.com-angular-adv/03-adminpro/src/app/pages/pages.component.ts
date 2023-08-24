import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit{
  public linkTheme = document.querySelector('#theme');

  ngOnInit(): void {
    // const url:string =
    const url = localStorage.getItem('theme') ||'./assets/css/colors/megna-dark.css';
    this.linkTheme?.setAttribute('href',url);

  }

}
