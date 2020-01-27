//Question 1

 const cat = {
     complain: function() {
         console.log("Meow!")
     }
 };

//Question 2

 const heading = document.querySelector("h3");

 //Question 3

 heading.style.fontSize = "2em";


//Question 4

 heading.classList.add("subheading");

//Question 5

 const paragraphs = document.querySelectorAll("p");

//Question 6

 const resultscontainer = document.querySelector(".results");

 resultscontainer.innerHTML = "<p>New paragraph</p>";


//Question 7

let cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold"
    },
    {
        name: "Blurt",
        age: 21
    }
];



 function funcats(catArray) {


     for(let i = 0; i < catArray.length; i++) {
        console.log( catArray[i].name);
     }

 }

funcats(cats)


//Question 8



function funcats(catArray) {

    cats = [
        {
            name: "Blob",
            age: 10
        },
        {
            name: "Harold"
        },
        {
            name: "Blurt",
            age: 21
        }
    ];


     let catsTag = "";

     for(let i = 0; i < catArray.length; i++) {
        catsTag += "<h5>" + catArray[i].name + "</h5>" + "\n";
     }
       
     return catsTag;
}

console.log(funcats(cats))

// //Question 9

 resultscontainer.innerHTML = funcats(cats);

//Question 10
    
function funcats(catArray) {

    cats = [
        {
            name: "Blob",
            age: 10
        },
        {
            name: "Harold"
        },
        {
            name: "Blurt",
            age: 21
        }
    ];

    let catsHTML = "";

    for(let i = 0; i < catArray.length; i++) {
    let age = "Age unknown"
        if (catArray[i].age) { 
            age = catArray[i].age
        };
    
    
    let catsTag = "";
    for(let v = 0; v < catArray.length; v++) {
       catsTag += "<h5>" + catArray[v].name + "</h5>" + "\n";
    }

    
   
     age = "";  
    for(let k = 0; k < catArray.length; k++) {
        age += "<p>" + catArray[k].age + "</p>" + "\n";
        
    };

    

    const catsAge = `<div>
${catsTag}
${age}</div>`;
    
    return  catsHTML += catsAge;

    
}}

funcats()