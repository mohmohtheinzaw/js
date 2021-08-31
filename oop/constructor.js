//constructor
let str ="hello";//string
let ob =new String("hello");//object
//litral//object(write with :)
const book={
    title :"myanmar",
    author:"aung",
    year :"2020",
     getTitle: function (){
        return `this title is ${this.title}`;
    }
};
console.log(book.getTitle());
console.log(book);
console.log(Object.keys(book));
console.log(Object.values(book));
//constructor
function magazine(title,author,year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.getTitle = function(){
        return `this title is ${this.title}`;
    };
}
var mag = new magazine("oop","aung","2020");
console.log(mag);
console.log(mag.getTitle());