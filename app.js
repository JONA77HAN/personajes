 // Función para mostrar el mensaje
 //function mostrarMensaje() {
   // alert("Te dije q no lo toques pelotudo");
//}

//funciones de la API para el clima 

///const API_KEY = '7ac4731b46408db3d982e08f720dff72';


//const fetchData = position => {
 //   const {latitud, longitude}= position.coords;
  //  fetch ('https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitude}&appid=${API_KEY}')
//.then(response => console.log(response));
  
 //   console.log(position);
//}
//const onLoad = () => {
   // navigator.geolocation.getCurrentPosition(log)
//}


//     ------------------------------------api del clima ----------------------------------

function getCharacters(done){

    const results = fetch ("https://rickandmortyapi.com/api/character");

    results
    .then (response => response.json())
    .then(data=> {
            done(data)
    });
}

getCharacters(data =>{
    data.results.forEach(personaje => {

            const article = document.createRange().createContextualFragment(/*html*/`
            
    <article>
        <div class="image-container">
            <img src="${personaje.image}" alt="personaje">
        </div>
        <h2>${personaje.name} </h2>
        <span> ${personaje.status} </span>
    </article>
  `);

const main = document.querySelector("main");
main.append(article);


    });
});

