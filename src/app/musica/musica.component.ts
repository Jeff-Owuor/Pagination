import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit {
  title = 'Pagination';
  POSTS:any;
  page: number = 1;
  count: number = 0;
  tablesize: number = 10;
  tablesizes: any = [5,10,15,20];

  constructor(private userService: ConfigService) { }
  ngOnInit(): void {
       this.postList()
  }
  postList():void{
    this.userService.getAllPosts().subscribe((res) =>{
        this.POSTS = res
        console.log(this.POSTS)
    })
}

  onTableDataChange(event:any){
      this.page = event;
      this.postList()
  }
  onTableSizeChange(event:any):void{
    this.tablesize = event.target.value;
    this.page = 1;
    this.postList()
  }

}
