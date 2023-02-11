const movieslist = [
  { title: "The Shawshank Redemption", genre: "Drama" },
  { title: "The Godfather", genre: "Crime" },
  { title: "The Godfather: Part II", genre: "Crime" },
  { title: "The Dark Knight", genre: "Action" },
  { title: "12 Angry Men", genre: "Drama" },
  { title: "Schindler's List", genre: "Drama" },
  {
    title: "The Lord of the Rings: The Return of the King",
    genre: "Adventure",
  },
  { title: "Pulp Fiction", genre: "Crime" },
  { title: "The Good, the Bad and the Ugly", genre: "Western" },
  { title: "Fight Club", genre: "Drama" },
  { title: "Forrest Gump", genre: "Drama" },
  { title: "Inception", genre: "Action" },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: "Adventure",
  },
  { title: "Star Wars: Episode V - The Empire Strikes Back", genre: "Action" },
  { title: "The Lord of the Rings: The Two Towers", genre: "Adventure" },
  { title: "The Matrix", genre: "Action" },
  { title: "Goodfellas", genre: "Crime" },
  { title: "One Flew Over the Cuckoo's Nest", genre: "Drama" },
  { title: "Seven Samurai", genre: "Adventure" },
  { title: "Se7en", genre: "Crime" },
  { title: "City of God", genre: "Crime" },
  { title: "The Silence of the Lambs", genre: "Thriller" },
  { title: "It's a Wonderful Life", genre: "Drama" },
  { title: "Life is Beautiful", genre: "Comedy" },
  { title: "The Usual Suspects", genre: "Crime" },
  { title: "Léon: The Professional", genre: "Action" },
  { title: "Spirited Away", genre: "Animation" },
  { title: "Saving Private Ryan", genre: "Drama" },
  { title: "Interstellar", genre: "Adventure" },
  { title: "The Green Mile", genre: "Drama" },
  { title: "The Prestige", genre: "Drama" },
  { title: "The Intouchables", genre: "Comedy" },
  { title: "The Lion King", genre: "Animation" },
  { title: "The Pianist", genre: "Drama" },
  { title: "The Departed", genre: "Crime" },
  { title: "Whiplash", genre: "Drama" },
  { title: "Gladiator", genre: "Action" },
];

let movies =[]
localStorage.setItem("previousdata", JSON.stringify(movieslist))
movies=JSON.parse(localStorage.getItem("previousdata"))

const searchIcon = document.getElementById("search");
const searchTitle=document.getElementById("title")
const searchGenre=document.getElementById("genre")
const showResults = document.getElementById("results");
const sortTitles = document.getElementById("sortTitle");
const sortGenres = document.getElementById("sortGenre");
const titleOption = document.getElementById("title-option");
const genreOption = document.getElementById("genre-option");
const bothOption = document.getElementById("both-option");
const Counting=document.getElementById("count")



searchIcon.addEventListener('click',(e)=>{
    e.preventDefault()
    if(searchTitle.value){
        results=searchByTitle(searchTitle.value)
        displayResults(results);
    }
    else{
        results = searchByGenre(searchGenre.value);
        displayResults(results);
    }

})


function searchByTitle(searchTerm){
    return movies.filter(item=>item.title.toLowerCase().includes(searchTerm.toLowerCase().trim()))
}

function searchByGenre(searchTerm) {
  return movies.filter((item) =>
    item.genre.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );
}

function searchBoth(title,genre){
    return movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase().trim()) &&
        movie.genre.toLowerCase().includes(genre.toLowerCase().trim())
    );
}

let arr=[]
let m = new Map();

function displayResults(list){
    showResults.innerHTML=""
    list.map(item=>{
        let liTag=`<li>${item.title} (${item.genre})</li>`
        showResults.innerHTML+=liTag
        if(m.has(item.genre)){
            m.set(item.genre, m.get(item.genre)+1)
        }
        else{
            m.set(item.genre,1)
        }
        arr.push(`${item.title}(${item.genre})`)
    })
   sortTitles.addEventListener("click", () => {
     sortByTitle(arr);
   });
   sortGenres.addEventListener("click", () => {
     sortByTitle(arr);
   });
   Counting.addEventListener("click",()=>{
    countByGenre(m);
   })
    // console.log("clicked search icon");
}
function sortByTitle(ele){
    showResults.innerHTML = "";
    const sortedTitles=ele.sort()
    sortedTitles.map(item=>{
        let liTag=`<li>${item}</li>`
        showResults.innerHTML+=liTag
    })
}
function sortByGenre(ele) {
  showResults.innerHTML = "";
  const sortedTitles = ele.sort();
  sortedTitles.map((item) => {
    let liTag = `<li>${item}</li>`;
    showResults.innerHTML += liTag;
  });
}

function countByGenre(m){
    showResults.innerHTML = "";
    for(let i of m){
        let liTag = `<li>${i[0]}: ${i[1]}</li>`;
        showResults.innerHTML=liTag
       
    }
}
