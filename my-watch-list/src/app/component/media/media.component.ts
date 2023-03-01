import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/media_service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  ngOnInit(): void {
    this.mediaList = this.mediaService.getMediaService();
  }
  mediaService = new MediaService();
  
  onDelete(id: number) {
    console.log(id);
    this.mediaService.onDeleteService(id);this.mediaList = this.mediaService.getMediaService();
  }
  mediaList = this.mediaService.getMediaService();

}
