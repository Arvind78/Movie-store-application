// import fetch from 'cross-fetch';

const apiKey ="api_key=9a2e16a207bfb617092cf134f6a0d681";
const baseUrl='https://api.themoviedb.org/3';
const apiUrl= baseUrl+'/discover/movie?sort_by=popularity.desc&'+apiKey;
 const main = document.getElementById('min'); 
 const imagePath ='https://image.tmdb.org/t/p/w500';
async function data(url) {
    let movie = await fetch(url);
    let movieData = await movie.json();
 console.log(movieData.results);
 showMove(movieData.results)
 }
 
 
  function showMove(data){
   
    data.forEach(element => {
      const{title,poster_path,vote_average,overview} = element; 
      const movieEl=document.createElement('div');
      movieEl.classList.add('movie');
      movieEl.innerHTML=`
    <img src="${imagePath+poster_path}" alt="erroor">
      <div class="info">
        <h3>${title}</h3>
         <span class=${getColor(vote_average)} >${vote_average}</span>
      </div>
      <div class="over">
        ${overview}
      </div>
 
      `
     main.appendChild(movieEl); 
    });
  }
  function getColor(vote){
    if(vote>=8){
      return 'green';
    }
    else if(vote>=5){
      return 'orange'
    }
    else{
      return 'red'
    }
  }
