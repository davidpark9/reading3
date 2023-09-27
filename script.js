const titleElement = document.getElementById('typing-title');
const paragraphElement = document.getElementById('typing-paragraph');
const responseElement = document.getElementById('typing-response');

const title = "My website is a shifting house next to a river of knowledge. What could yours be? - Laura Schwulst";
const paragraph = "It’s healthy to acknowledge today’s web is much different than the web many of us grew up using. So when they ask how to make a website (despite having already 'learned'), they are alluding to the technological friction and social pressures that often come along with creating and maintaining a website in 2018.";

const response = "Response: This quote resonates with me on a deep level because it captures the ever-evolving nature of the internet and the challenges we face as individuals navigating this digital landscape. I remember a time when creating a website was a relatively simple endeavor, but as the web matured, it became increasingly complex. Social media platforms emerged, shaping the way we connect and share information. While they brought convenience, they also brought new pressures, like the need for personal branding and constant engagement.";

let titleIndex = 0;
let paragraphIndex = 0;
let responseIndex = 0;

function typeTitle() {
    if (titleIndex < title.length) {
        titleElement.innerHTML += title.charAt(titleIndex);
        titleIndex++;
        setTimeout(typeTitle, 10);
    } else {
        titleElement.innerHTML += "<br>";
        typeParagraph();
    }
}

function typeParagraph() {
    const words = paragraph.split(' ');
    const chunkSize = 8;
    let chunk = '';

    if (paragraphIndex < words.length) {
        for (let i = 0; i < chunkSize && paragraphIndex < words.length; i++) {
            chunk += words[paragraphIndex] + ' ';
            paragraphIndex++;
        }
        const paragraphChunk = document.createElement('div');
        paragraphChunk.textContent = chunk;
        paragraphElement.appendChild(paragraphChunk);
        setTimeout(typeParagraph, 30); 
    }
}




function typeResponse() {
    const words = response.split(' ');
    const chunkSize = 8;
    let chunk = '';

    if (responseIndex < words.length) {
        for (let i = 0; i < chunkSize && responseIndex < words.length; i++) {
            chunk += words[responseIndex] + ' ';
            responseIndex++;
        }
        const responseChunk = document.createElement('div');
        responseChunk.textContent = chunk;
        responseElement.appendChild(responseChunk);
        setTimeout(typeResponse, 30);
    }
}

typeTitle();
setTimeout(typeResponse, 2000);
