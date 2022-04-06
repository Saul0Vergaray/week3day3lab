//console.log('helloworld')
document.querySelector('form').addEventListener("submit", addMovie);
function addMovie(event){
    event.preventDefault();
   let inputField = document.querySelector('input')

    const movie = document.createElement('li')

    const movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle);

deleteBtn = addMovie.createElement('button');
deleteBtn.textContent = 'x'
deleteBtn.addEventListener('click', deleteMovie)
const list = document.querySelector("ul");
movie.appendChild(deleteBtn)

    inputField.value = ''
}
function deleteMovie(event){
    event.target.parentNode.remove();
}
function crossOffMovie(event) {
    event.target.classList.toggle('checked')

    if (event.target.classList.contains('checked') === true) {
        message.textContent = 'Movie watched!'
        
    } else {
        message.textContent = 'Movie added back!'
        
    }