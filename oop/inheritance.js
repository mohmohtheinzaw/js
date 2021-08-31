function magazine(title,author,year){
    this.title = title;
    this.author = author;
    this.year =year;
   
}
//prototype
 magazine.prototype.getTitle = function(){
    return `this title is ${this.title}`;
};
magazine.prototype.getYear =function(){
    const years =new Date().getFullYear() - this.year;
    return `this ${this.title} is written by ${this.author} and years= ${years} {years`;
}
function News(title,author,year,month){
    magazine.call(this,title,author,year);//inheritance
    this.month=month;
    this.getTitle = function(){
        return `this ${this.title} is written by ${this.author} at ${this.year}}`;
    }
}
//var mag = new magazine("oop","aung","2020");
let page = new News("myanmar","aung","2020","july");
console.log(page);
console.log(page.getTitle());
