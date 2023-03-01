export class MediaService{
    mediaList = [
        {title: "The Shawshank Redemption", year: 1994, director: "Frank Darabont", genre: "Drama", id: 1},
        {title: "The Godfather", year: 1972, director: "Francis Ford Coppola", genre: "Crime", id: 2},
        {title: "The Godfather: Part II", year: 1974, director: "Francis Ford Coppola", genre: "Crime", id: 3},
        {title: "The Dark Knight", year: 2008, director: "Christopher Nolan", genre: "Action", id: 4},
        {title:"Shrek", year: 2001, director: "Andrew Adamson", genre: "Animation", id: 5},
        {title: "The Lord of the Rings: The Return of the King", year: 2003, director: "Peter Jackson", genre: "Adventure", id: 6},
        {title: "The Good, the Bad and the Ugly", year: 1966, director: "Sergio Leone", genre: "Western", id: 7},
        {title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001, director: "Peter Jackson", genre: "Adventure", id: 8},
    ];

    getMediaService(){
        console.log(this.mediaList);
        return this.mediaList;
    }

    addMediaService(media: any){
        this.mediaList.push(media);
    }

    onDeleteService(id: number){
        this.mediaList = this.mediaList.filter((media) => media.id !== id);
    }
}