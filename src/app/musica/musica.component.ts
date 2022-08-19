import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {
  public musical = []
  music:any
  constructor(private musicSelection: ConfigService) { }

  ngOnInit(): void {
    this.musicSelection.getMusic()
    .subscribe( data => {console.log(data) 
    this.music = data})
  }

}
