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
    return `this ${this.title} is written by ${this.author} and years= ${years} years`;
}
var mag = new magazine("oop","aung","2020");
console.log(mag);
console.log(mag.getTitle());
console.log(mag.getYear());