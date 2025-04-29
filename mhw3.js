function onHoverNav() {
    const nav = document.querySelector('.nav-sotto-con2');
    const nav2 = document.querySelector('#nav_sopra_flex');
    const flex_item=document.querySelectorAll('.dropdown .flex-item_nav2');
    const flex_item2=document.querySelectorAll('#nav_sopra_flex .flex-item_nav');
    const immagine_cerca= document.querySelector('.flex-item_nav2  .immagine_piccola');
    const cerca_immagine_border= document.querySelector('.nav_sotto_flex2');
    const accedi= document.querySelector('#accedi');

    immagine_cerca.src="Immagini/cerca.svg"; 

    const immagine_bag= document.querySelector('.flex-item_nav2-2  .immagine_piccola');

    immagine_bag.src="Immagini/bag_nera.jpg"; 

    cerca_immagine_border.classList.add('nav_sotto_flex2_java')

    for(let item of flex_item){
        item.classList.add("colorePerJavaNav"); 
    }

    for(let item of flex_item2){
        item.classList.add("colorePerJavaNav2"); 
    }
    
  
    nav.classList.add('hoveredNav');
    nav2.classList.add('hoveredNav');
}

function onHoverNavOut() {
    const nav = document.querySelector('.nav-sotto-con2');
    const nav2 = document.querySelector('#nav_sopra_flex');
    const cerca_immagine_border= document.querySelector('.nav_sotto_flex2');

    const immagine_cerca= document.querySelector('.flex-item_nav2  .immagine_piccola');

    immagine_cerca.src="Immagini/cerca_bianca.svg"; 

    
    
    const immagine_bag= document.querySelector('.flex-item_nav2-2  .immagine_piccola');

    immagine_bag.src="Immagini/bag_bianca.png"; 

    const flex_item=document.querySelectorAll('.dropdown .flex-item_nav2');
    
    const flex_item2=document.querySelectorAll('#nav_sopra_flex .flex-item_nav');

    cerca_immagine_border.classList.remove('nav_sotto_flex2_java')

    for(let item of flex_item){
        item.classList.remove("colorePerJavaNav"); 
    }

    for(let item of flex_item2){
        item.classList.remove("colorePerJavaNav2"); 
    }

    nav.classList.remove('hoveredNav');
    nav2.classList.remove('hoveredNav');

}

let nav_sotto_con2= document.querySelectorAll(".dropdown"); 

for(let item of nav_sotto_con2){
    item.addEventListener('mouseover', onHoverNav);
    item.addEventListener('mouseout', onHoverNavOut);
}






function onClickFrecciaHeader() {
    indice = (indice + 1) % scritte.length;
    testo.textContent = scritte[indice];

    for (let i = 0; i < palline.length; i++) {
        if (i === indice) {
            palline[i].classList.add('pallina-attiva');
        } else {
            palline[i].classList.remove('pallina-attiva');
        }
    }
}

const scritte = [
    "SCONTO EXTRA DEL 10% SU OUTLET, INSERISCI IL CODICE OUTLET10, ACQUISTA ORA",
    "UNISCITI A XPLR PASS E RICEVI IL 10% DI SCONTO SUL TUO PRIMO ORDINE"
];
var indice = 0;

const testo = document.querySelector('.flex-item_header');
const freccia = document.querySelectorAll('.immagine_freccia');
const palline = document.querySelectorAll('.pallina'); 

for (let item of freccia) {
    item.addEventListener('click', onClickFrecciaHeader);
}

palline[indice].classList.add('pallina-attiva');



function accesso(event) {
    const modalView = document.querySelector('#modal-view');
    modalView.style.top= window.pageYOffset + 'px';
    document.body.classList.add('no-scroll');
    modalView.classList.remove('hidden');
}

function fuoriAccesso(event) {
    if (event.target === event.currentTarget) { 
        const modalView = document.querySelector('#modal-view');
        modalView.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    }
}

const accedi = document.querySelectorAll('#accedi');

for(let item of accedi){
    item.addEventListener('click', accesso); 
}   
const modalView = document.querySelector('#modal-view');
const X_chiusura= document.querySelector("#chiudi");

modalView.addEventListener('click', fuoriAccesso);
chiudi.addEventListener('click', fuoriAccesso);





function accediXPASS(event) {
    const elemento = document.querySelector('#xplr-pass-logo');
    elemento.classList.add('nascondi');
    const new_h1 = document.createElement('h1');
    new_h1.classList.add('h1-stile_java');
    new_h1.textContent = "Accedi a XPLR PASS per usufruire di sconti esclusivi";
    const daNascondere = document.querySelector('#daNascondere');
    daNascondere.appendChild(new_h1);
    daNascondere.removeEventListener('mouseover', accediXPASS); 
 
}


const daNascondere = document.querySelector('#daNascondere');
daNascondere.addEventListener('mouseover', accediXPASS); 






function passaggioFoto(event){
    event.currentTarget.src= event.currentTarget.dataset.srcAlt; 
  }
  
  function passaggioFotoOut(event){
    event.currentTarget.src= event.currentTarget.dataset.srcOrig; 
  }
  
  const foto=document.querySelectorAll(".immagini-foto-flex-4"); 
  
  for(let item of foto ){
    item.addEventListener('mouseover',passaggioFoto);
    item.addEventListener('mouseout',passaggioFotoOut)
  }











  function onResponse(response) {
    console.log("Risposta ricevuta");
    return response.json();
  }
  
  function onJson(json) {
    console.log(json);
    const notizie = document.querySelector("#new");
    notizie.innerHTML = ""; 
  
    const chiusuraNotizie = document.querySelector("#chiudi-notizie");
    chiusuraNotizie.classList.add("mostraX");
    
    for (let i = 0; i < 12 && i < json.articles.length; i++) {
      let div1 = document.createElement("div");
      div1.classList.add("elemento");
  
      let h3 = document.createElement("h3");
      h3.textContent = json.articles[i].title;
  
      let img = document.createElement("img");
      img.src = json.articles[i].image;
  
      div1.appendChild(h3);
      div1.appendChild(img);
      notizie.appendChild(div1); 
    }
  }
  
  function search(event) {
    event.preventDefault();
  
    const input = document.querySelector('#search-input');
    const query = encodeURIComponent(input.value);
    console.log('Eseguo ricerca: ' + query);
  
    const rest_url = 'https://gnews.io/api/v4/search?q=' + query + '&lang=it&apikey=5753615843e5ad725140440467f3999d';
    
    console.log("URL: " + rest_url);
    fetch(rest_url).then(onResponse).then(onJson);
  }
  
  function clickChiusuraNotizie(event) {
    const notizie = document.querySelector("#new"); 
    notizie.innerHTML = ""; 
  
    const chiusuraNotizie = document.querySelector("#chiudi-notizie");
    chiusuraNotizie.classList.remove("mostraX");
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', search);
  
  const chiudiNotizie = document.querySelector("#chiudi-notizie");
  chiudiNotizie.addEventListener("click", clickChiusuraNotizie);
  












  



  nomeCitta = 'Catania'; 

  function onJsonMeteo(json){
      const container = document.querySelector('#weather-box');
      container.innerHTML = '';
    
        console.log('Dati meteo ricevuti:', json);
        const title = document.createElement('h2');
        title.textContent = 'Meteo per la tua zona:  ' + json.location.name;
  
        const temp = document.createElement('p');
        temp.textContent = 'Temperatura: ' + json.current.temp_c + '°C'; 
  
        const condition = document.createElement('p');
        condition.textContent = 'Condizione: ' + json.current.condition.text; 
  
        const icon = document.createElement('img');
        icon.src = 'https:' + json.current.condition.icon; 
        icon.alt = json.current.condition.text;

        const humidity = document.createElement('p');
        humidity.textContent = 'Umidità: ' + json.current.humidity + '%'; 

        const ventovelocity = document.createElement('p');
        ventovelocity.textContent = 'Velocità del Vento: ' + json.current.wind_kph + ' km/h'; 

        const testoMeteo = document.createElement('p');
        const vento = json.current.vento_kph; 
        const visibilita = json.current.vis_km; 
        const precipitationi = json.current.precip_mm; 
        if (precipitationi > 30 || vento > 25 || visibilita < 3) {
            testoMeteo.textContent = 'Utilizza vestiti invernali, guarda il nostro catalogo.';
            testoMeteo.classList.add('testo-meteo');
        } else if (vento > 15) {
            testoMeteo.textContent = 'Porta con te una giacca, il vento potrebbe essere forte.';
            testoMeteo.classList.add('testo-meteo');
        } else {
            testoMeteo.textContent = 'Il tempo è buono, vestiti leggero, guarda lo store estivo.';
            testoMeteo.classList.add('testo-meteo');
        }

        const updated = document.createElement('h4');
        updated.textContent = 'Ultimo aggiornamento: ' + json.current.last_updated;


        container.appendChild(title);
        container.appendChild(temp);
        container.appendChild(condition);
        container.appendChild(humidity);
        container.appendChild(ventovelocity);
        container.appendChild(testoMeteo);
        container.appendChild(icon);
        container.appendChild(updated);
  }
  
  function onResponseMeteo(response) {
      return response.json();
  }
  
  function fecthMeteo(lat, lng) {
      const apiKey = '//';  
      const url=`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lng}&lang=it`;
    
      fetch(url).then(onResponseMeteo).then(onJsonMeteo);
    }
    



    

    function onJsonCordinate(json) {
      console.log('Coordinate ricevute');
      console.log(json); 
      const resources = json.resourceSets[0].resources;
    
      if (resources.length > 0) {
        const coords = resources[0].point.coordinates;
        const lat = coords[0];
        const lng = coords[1];    
        console.log('Coordinate:', lat, lng);
        fecthMeteo(lat, lng);
      } else {
        console.error('Coordinate non trovate');
      }
    }
    
    
    function onResponseCordinate(response) {
      console.log('Risposta coordinate ricevuta');
      return response.json();
    }
    
   
    function fetchTrovaCordinate(event) {
      event.preventDefault(); 
      console.log('Richiesta coordinate');
      const bingMapsKey = '//';
      const url = 'http://dev.virtualearth.net/REST/v1/Locations?query=' + encodeURIComponent(nomeCitta) + '&key=' + bingMapsKey;
      fetch(url).then(onResponseCordinate).then(onJsonCordinate);
    }
  
  
  
  


    const form1 = document.querySelector('.container-map form');
    form1.addEventListener('submit', fetchTrovaCordinate);

    
    






    
    function onJson2(json) {
      console.log("stampa"); 
      console.log(json);
      const library = document.querySelector("#album-view");
      library.innerHTML = "";
      const results = json.albums.items;
      let num_results = results.length;
      if (num_results > 12) num_results = 12;
      for (let i = 0; i < num_results; i++) {
        const album_data = results[i];
        const title = album_data.name;
        const selected_image = album_data.images[0].url;
        const album = document.createElement("div");
        album.classList.add("album");
        const img = document.createElement("img");
        img.src = selected_image;
        const caption = document.createElement("span");
        caption.textContent = title;
        album.appendChild(img);
        album.appendChild(caption);
        library.appendChild(album);
      }
    }
    
    function onResponse2(response) {
      console.log("Risposta ricevuta");
      return response.json();
    }


    
    function search2(event) {
      event.preventDefault();
      const album_input = document.querySelector("#album");
      const album_value = encodeURIComponent(album_input.value);
      console.log("Eseguo ricerca: " + album_value);
      fetch("https://api.spotify.com/v1/search?type=album&q=" + album_value, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then(onResponse2)
        .then(onJson2);
    }
    
    
    
    function onTokenJson(json) {
      console.log("stampo del json")
      console.log(json);
      token = json.access_token;
    }
    
    
    
    function onTokenResponse(response) {
      return response.json();
    }
    
    
    
    const client_id = "//";
    const client_secret = "//";
    let token;
    fetch("https://accounts.spotify.com/api/token", {
      method: "post",
      body: "grant_type=client_credentials",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(client_id + ":" + client_secret),
      },
    })
      .then(onTokenResponse)
      .then(onTokenJson);
    
    
    const form2 = document.querySelector("#album-container form");
    form2.addEventListener("submit", search2);
    console.log(form2);
