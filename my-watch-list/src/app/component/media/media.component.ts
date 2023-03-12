import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/media_service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  mediaList: any[] = [];

  constructor(private mediaService: MediaService) { }

  ngOnInit(): void {
    this.mediaService.getMediaListObservable().subscribe(newMediaList => {
      this.mediaList = newMediaList;
    });
    this.mediaList = this.mediaService.getMediaService();
  }

  onDelete(id: number) {
    console.log(id);
    this.mediaService.onDeleteService(id);
  }
}