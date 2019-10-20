/********************************************/


/********************************************/

var books = [
    {
        name:"Divine Songs", 
        author:"Isaac Watts", 
        price:11.99, 
        origina: "UK"
    },
        {
        name:"The Governess, or The Little Female Academy", 
        author:"Sarah Fielding", 
        price:15.29, 
        origina: "UK"
    },
        {
        name:"Moral Tales for Young People", 
        author:"Maria Edgeworth", 
        price:15.99, 
        origina: "UK"
    },
        {
        name:"Countess Kate", 
        author:"Charlotte M. Yonge", 
        price:9.99, 
        origina: "UK"
    },
        {
        name:"Alice's Adventures in Wonderland", 
        author:"Lewis Carroll", 
        price:29.99, 
        origina: "UK"
    },
        {
        name:"It's Perfectly Normal", 
        author:"Robie Harris", 
        price:13.99, 
        origina: "US"
    },
        {
        name:"The Fairy Circus", 
        author:" Dorothy P. Lathrop", 
        price:16.99, 
        origina: "US"
    },
        {
        name:"Fog Magic", 
        author:"Julia Sauer", 
        price:11.99, 
        origina: "US"
    },
        {
        name:"Doctor De Soto", 
        author:"William Steig", 
        price:10.99, 
        origina: "UK"
    },
        {
        name:"Dinosaur vs. Bedtime", 
        author:"Bob Shea", 
        price:16.99, 
        origina: "US"
    },
        {
        name:"The Lord of the Rings", 
        author:"J. R. R. Tolkien", 
        price:45.99, 
        origina: "UK"
    },
        {
        name:"Harry Potter and the Philosopher's Stone", 
        author:"J. K. Rowling", 
        price:32.99, 
        origina: "UK"
    },
        {
        name:"The Hobbit", 
        author:"J. R. R. Tolkien", 
        price:26.99, 
        origina: "UK"
    },
        {
        name:"Divine Songs", 
        author:"Isaac Watts", 
        price:11.99, 
        origina: "UK"
    },
        {
        name:"And Then There Were None", 
        author:"Agatha Christie", 
        price:17.99, 
        origina: "UK"
    },
        {
        name:"The Lion, the Witch and the Wardrobe", 
        author:"C. S. Lewis", 
        price:25.99, 
        origina: "UK"
    },
        {
        name:"Anne of Green Gables", 
        author:"L.M. Montgomery", 
        price:18.99, 
        origina: "Canada"
    },
        {
        name:"The Stone Angel", 
        author:"Margaret Laurence", 
        price:27.99, 
        origina: "Canada"
    },
        {
        name:"The Wars", 
        author:"Timothy Findley", 
        price:36.99, 
        origina: "Canada"
    },
        {
        name:"Who Do You Think You Are", 
        author:"Alice Munro", 
        price:48.99, 
        origina: "Canada"
    },
        {
        name:"The Handmaid’s Tale", 
        author:"Margaret Atwood", 
        price:27.99, 
        origina: "Canada"
    },
        {
        name:"The Alchemist", 
        author:"Paulo Coelho", 
        price:16.99, 
        origina: "Brazil"
    },
        {
        name:"Dream of the Red Chamber ", 
        author:"Cao Xueqin", 
        price:22.99, 
        origina: "China"
    },
        {
        name:"Vardi Wala Gunda", 
        author:"Ved Prakash Sharma", 
        price:18.99, 
        origina: "India"
    }
    
];

function getDiscountedPrices()
{
       books.forEach( function(book){
           if(book.origin==="US") {
               book.salesprice = book.price * 0.9;
           } else if (book.origin==="UK") {
               book.salesprice = book.price * 0.95;
           } else if (book.origin==="Canada") {
               book.salesprice = book.price * 0.88;
           } else {
               book.salesprice = book.price * 0.85;
           }           
              console.log("Name: " + book.name);   
              console.log("Author: " + book.author);   
              console.log("Price: " + book.price);   
              console.log("Sales Price: " + book.salesprice);   
              console.log("");   
        });
        
         
}
