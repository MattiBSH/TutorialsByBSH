import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MediaService } from 'src/app/media_service';

type Media = {
  title: string;
  year: number;
  director: string;
  genre: string;
  id:number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  watchForm!: FormGroup;

  constructor(private fb: FormBuilder, private mediaService: MediaService) { }

  ngOnInit(): void {
    this.watchForm = this.fb.group({
      title: [''],
      year: [],
      genre: [''],
      director: [''],
      id:['']
    });

    this.mediaService.getMediaListObservable().subscribe(newMediaList => {
      this.mediaList = newMediaList;
    });
  };

  title = 'my-watch-list';
  mediaList: any

  visible = false;
  addFormVisibility() {
    console.log("Add Form Visibility"+this.visible);
    this.visible = !this.visible;
  };

  onSubmit() {
    console.log("Form Submitted");
    let mediaAmount = this.mediaService.getMediaService().length;
    let media1:Media= {director:this.watchForm.value.director,genre:this.watchForm.value.genre,title:this.watchForm.value.title,year:this.watchForm.value.year,id:mediaAmount+1};
    this.mediaService.addMediaService(media1);
    let mediaList = this.mediaService.getMediaService();
    console.log(mediaList);
  };

}
