import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../core/models/Post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input('post') post: Post;

  constructor() {
  }

  ngOnInit(): void {
  }

}
