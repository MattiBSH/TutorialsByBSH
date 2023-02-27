import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

type media = {
  title: string;
  year: number;
  director: string;
  genre: string;
  id:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  watchForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.watchForm = this.fb.group({
      title: [''],
      year: [],
      genre: [''],
      director: [''],
      id:['']
    });
  };
  title = 'my-watch-list';
  showAddForm = false;
  addFormVisibility() {
    this.showAddForm = !this.showAddForm;
  };
  watchList = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      genre: 'Drama',
      id:1
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      genre: 'Crime',
      id:2
    },
    {
      title: 'The Godfather: Part II',
      year: 1974,
      director: 'Francis Ford Coppola',
      genre: 'Crime',
      id:3
    },
    {
      title: 'High School Musical 3: Senior Year',
      year: 2008,
      director: 'Kenny Ortega',
      genre: 'Musical',
      id:4
    }
  ];
  onSubmit() {
    console.log("Form Submitted");
    let media1:media= {director:this.watchForm.value.director,genre:this.watchForm.value.genre,title:this.watchForm.value.title,year:this.watchForm.value.year,id:this.watchList.length+1};
    this.watchList.push(media1);
  };
  onDelete(id: number) {

    const index = this.watchList.findIndex(item => item.id === id);
    if (index >= 0) {
      this.watchList.splice(index, 1);
    }
  }

}
