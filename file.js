
let contents = [
    {
        content: "Start writing, no matter what. The water does not flow until the faucet is turned on.",
        name: "- Louis L’Amour"
    },

    {
        content: "Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.",
        name: "- William Faulkner",
        color: "#90EE90"
    },
    {
        content: "The first draft is just you telling yourself the story.",
        name: "- Terry Pratchett",
        color:"#F08080"
    },
    {
        content: "You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it.",
        name: "- Octavia E. Butlerr",
        color:"#FF69B4"
    },
    {
        content: "You can always edit a bad page. You can’t edit a blank page.",
        name: "- Jodi Picoult",
        color: "#FFA500"
    },
    {
        content : "I have never started a poem yet whose end I knew. Writing a poem is discovering.",
        name : "- Robert Frost",
        color: "#2E8B57"
    },
    {
        content : "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
        name : "- Toni Morrison",
        color: "#6A5ACD"
    },
    {
        content : "First, find out what your hero wants, then just follow him!",
        name : "- Ray Bradbury",
        color: "#00FF7F"
    },
    {
        content :  "Writing a novel is like driving a car at night. You can only see as far as your headlights, but you can make the whole trip that way.",
        name : "- E. L. Doctorow",
        color: "#008080"
    },
    {
        content : "To produce a mighty book, you must choose a mighty theme.",
        name : "- Herman Melville",
        color: "#808000"
    },
];

let quote = document.getElementById("quote");
let auther = document.getElementById("auther");
let heading = document.getElementById("heading");
let btn = document.getElementById("btn");
let main = document.getElementById("main");
let left = document.getElementById("left");
let right = document.getElementById("right");
let value;

let time = new Date().getHours();
console.log(time)
if(time < 13){
    heading.innerHTML = `Lets start our Morning with a new quote` 
}
else if(time < 17){
    heading.innerHTML = `Lets start our Afternoon with a new quote`
}
else if(time < 21){
    heading.innerHTML = `Lets start our Evening with a new quote`
}
else{
    heading.innerHTML = `Lets start our Night with a new quote`
}


quote.innerHTML = contents[0].content;
auther.innerHTML = contents[0].name;

btn.addEventListener('click', ()=>{
    value = Math.floor(Math.random() * contents.length);
    quote.innerHTML = contents[value].content;
    auther.innerHTML = contents[value].name;

    quote.style.color =  contents[value].color;
    auther.style.color =  contents[value].color;
    btn.style.backgroundColor = contents[value].color;
    main.style.backgroundColor = contents[value].color;
    left.style.color = contents[value].color;
    right.style.color = contents[value].color;
})


/*
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
#main{
    width: 100vw;
    height: 100vh;
    background-color: cornflowerblue;
    font-family: 'Nunito Sans', sans-serif;
}
.box{
    margin: auto;
    width: 40%;
    min-height: 300px;
    position: relative;
    top: 200px;
}
#heading{
    margin-bottom: 20px;
    text-align: center;
    color: white;
}
.inputs{
    background-color: white;
    text-align: center;
    padding: 20px 25px;
    border-radius: 10px;
    box-shadow: 7px 7px 20px rgba(0, 0, 0, 0.6);
}
#quote{
    font-weight: bold;
    font-size:22px;
    color: cornflowerblue;
}
#auther{
    font-weight: bold;
    font-size:22px;
    color: cornflowerblue;
    position: relative;
    left: 150px;
    top: 10px;
}
.fa-quote-left{
    font-size: 10px;
    position: relative;
    bottom: 10px;
    right: 5px;
    color: cornflowerblue;
}
.fa-quote-right{
    font-size: 10px;
    position: relative;
    bottom: 10px;
    color: cornflowerblue;
}
button{
    background-color: cornflowerblue;
    color: white;
    padding: 8px 30px;
    font-family: 'Nunito Sans', sans-serif;
    border: none;
    font-weight: bold;
    font-size: 15px;
    border-radius: 3px;
    position: relative;
    top: 30px;
    margin-bottom: 30px;
    box-shadow: 7px 7px 20px rgba(0, 0, 0, 0.6);
}*/