export function setLocalStorage(data, address){
    localStorage.setItem(address, JSON.stringify(data));
}

function getLocalStorage(address){
    let data = JSON.parse(localStorage.getItem(address)); 
    return data;
}

const data = {
    approaching : [
        {
            "title": "Bai dau tien cua bo m",
            "date": "Day 1",
            "urlTextContent": "thieu nho lan dau code",
            "url": "https://rosswintle.uk/?fbclid=IwAR1DXBCzHtbdcME6XQhpvoiHqvPTH7x0vxP_38gUPJCGdqAJxMAnLEaZx84" //ex 1
        }
        
    ],

}

let currentPage = 1;
const totalItem = Math.floor(data.approaching.length / 10 +1);

document.getElementById("fl").addEventListener("click", () => {
    currentPage = 1;
    updatePostsContainer();
});

document.getElementById("fr").addEventListener("click", () => {
    currentPage = totalItem;
    updatePostsContainer();
});

document.getElementById("ll").addEventListener("click", () => {
    if (currentPage > 1)
    currentPage--;
    updatePostsContainer();
});

document.getElementById("lr").addEventListener("click", () => {
    if (currentPage < totalItem)
    currentPage++;
    updatePostsContainer();
});

var input = document.getElementById('pi');

input.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {  
        if (input.value >= 1 && input.value <= totalItem) {
            setLocalStorage(parseInt(input.value), "cp");
            currentPage = parseInt(input.value);
            updatePostsContainer();
            event.preventDefault();
        }
    }
});

function renderPosts(data, page) {
    const approachingPosts = data.approaching;
    const container = document.createElement('ul');
    container.style.cssText = `
    list-style-type: none; 
        padding: 0;
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
    `;

    let rowDiv; 

    const startIndex = (page - 1) * 10;
    const endIndex = Math.min(startIndex + 10, approachingPosts.length);

    approachingPosts.slice(startIndex, endIndex).forEach((postData, index) => {
        if (index % 2 === 0) {
            rowDiv = document.createElement('div');
            rowDiv.style.cssText = `
                display: flex;
                justify-content: flex-start;
                width: 100%;
            `;
        }

        const post = document.createElement('li');
        post.style.cssText = "margin: 15px; color: white;";

        const article = document.createElement('article');
        article.style.cssText = "padding: 10px;";

        const header = document.createElement('h3');
        header.style.cssText = "font-size: 18px; color: #333;";

        const anchor = document.createElement('a');
        anchor.href = postData.url;
        anchor.textContent = postData.title;
        anchor.style.cssText = `
            color: white;
        `;

        header.appendChild(anchor);

        const meta = document.createElement('p');
        meta.className = "post-meta";
        meta.style.cssText = "font-style: italic; color: #AFAFAF;";
        meta.textContent = postData.date;

        const excerptPara = document.createElement('p');
        excerptPara.className = "post-excerpt";
        excerptPara.style.cssText = "margin-top: 10px;";
        excerptPara.textContent = postData.urlTextContent;

        article.appendChild(header);
        article.appendChild(meta);
        article.appendChild(excerptPara);

        post.appendChild(article);
        
        rowDiv.appendChild(post);

        if ((index + 1) % 2 === 0 || index === endIndex - 1) {
            container.appendChild(rowDiv);
        }
    });

    return container;
}

function updatePostsContainer() {
    const postsContainer = document.querySelector('.posts-container');
    postsContainer.innerHTML = '';
    postsContainer.appendChild(renderPosts(data, currentPage));
    setLocalStorage(currentPage, "cp");
    setLocalStorage(totalItem, "tt");
    document.getElementById("pi").setAttribute("placeholder", currentPage);
}

updatePostsContainer();

