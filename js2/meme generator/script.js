const generateMemeBtn = document.querySelector('.generate-meme-btn');
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector('.meme-title');
const memeAuthor = document.querySelector('.meme-author');

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
}

const generateMeme = () => {
    fetch("https://meme-api.herokuapp.com/gimme/wholesomememes")
        .then((response) => response.json())
        .then((data) => {
            updateDetails(data.url, data.title, data.author);
        })
        .catch((error) => {
            console.error("Error fetching meme:", error);
        });
};

generateMemeBtn.addEventListener("click", generateMeme);
