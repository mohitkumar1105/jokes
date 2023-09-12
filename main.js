
const jokes = document.querySelector('#jokes');
const jokeBtn = document.querySelector('#jokesBtn');

const generateJoke = () => {


    fetch("https://icanhazdadjoke.com",{
        headers :{
            "Content-Type": "application/json",
            "Accept":"application/json"
        }
    })
    .then((res) => res.json())
    .then(({joke}) =>jokes.innerHTML=joke)
   
    .catch((Error) =>{
        console.log(Error)
        alert(Error)
    })


    
   
}


jokeBtn.addEventListener('click',generateJoke)







    


