class Movie{
    constructor(title, studio, rating){
        this.title = title;
		this.studio = studio;
		this.rating = rating;
    } 
    getPG(){
        if(this.rating == "PG13")
		      return [this.title,'Parental guidance suggested for under 17'];
		else
        return [this.title,'Not recommended for kids'];
		
    }
}

let m = new Movie("Casino Royale", "Eon Production", "PG13");
let m1 = new Movie("Capitan America", "Joe Johnston", "R");
console.log(m.getPg());
console.log(m1.getPg());
