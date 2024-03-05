function setLocalStorage(data, address){
    localStorage.setItem(address, JSON.stringify(data));
}

function getLocalStorage(address){
    let data = JSON.parse(localStorage.getItem(address)); 
    return data;
}

const data = {
    approaching: [
        {
            "title": "1 March 2024",
            "date": "01-03-2024",
            content: [
                {
                    "url": "https://oj.vnoi.info/problem/cowgirl",
                    "urlTextContent": "Cow Girl - Bitmask dp"
                },
                {
                    "url": "https://codeforces.com/problemset/problem/1182/A",
                    "urlTextContent": "A. Filling Shapes - dp"
                }
            ]
        },
        {
            "title": "2 March 2024",
            "date": "02-03-2024",
            content: [
                {
                    "url": "https://cses.fi/problemset/task/1746",
                    "urlTextContent": "Array Description - dp"
                },
                {
                    "url": "https://cses.fi/problemset/task/1639",
                    "urlTextContent": "Edit Distance - dp"
                },
                {
                    "url": "https://oj.vnoi.info/problem/mixup2",
                    "urlTextContent": "Mixed Up Cows - dp"
                }
            ]
        },
        {
            "title": "3 March 2024",
            "date": "03-03-2024",
            content: [
                {
                    "url": "https://codeforces.com/problemset/problem/830/A",
                    "urlTextContent": "A. Office Keys - dp"
                },
                {
                    "url": "https://codeforces.com/problemset/problem/961/B",
                    "urlTextContent": "B. Lecture Sleep - dp"
                },
            ]
        },
        {
            "title": "5 March 2024",
            "date": "05-03-2024",
            content: [
                {
                    "url": "https://codeforces.com/contest/1935/problem/B",
                    "urlTextContent": "B. Informatics in MAC"
                },
                {
                    "url": "https://codeforces.com/contest/1935/problem/A",
                    "urlTextContent": "A. Entertainment in MAC"
                },
                {
                    "url": "https://atcoder.jp/contests/arc084/tasks/arc084_b",
                    "urlTextContent": "D - Small Multiple"
                },
            ]
        }
    ]
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
            input.value = '';
            event.preventDefault();
        }
    }
});

function renderPosts(data, page) {
    const pagePerEach = 8;
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

    const startIndex = (page - 1) * pagePerEach;
    const endIndex = Math.min(startIndex + pagePerEach, approachingPosts.length);

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
        article.style.cssText = `
            padding: 10px;
            display: flex;
            flex-direction: column;
        `;

        const header = document.createElement('h3');
        header.style.cssText = "font-size: 18px; color: #AFAFAF;";

        const anchor = document.createElement('div');
        anchor.textContent = postData.title;
        anchor.style.cssText = `
            color: white;
        `;

        header.appendChild(anchor);

        const meta = document.createElement('p');
        meta.className = "post-meta";
        meta.style.cssText = "font-style: italic; color: #666;";
        meta.textContent = postData.date;

        article.appendChild(header);
        article.appendChild(meta);

        for (let i in postData.content) {
            const excerptPara = document.createElement('a');
            excerptPara.className = "post-excerpt";
            excerptPara.style.cssText = `
                display: block;
                color: white;
                
            `;
            excerptPara.target = "_blank";
            excerptPara.textContent = postData.content[i].urlTextContent;
            excerptPara.href = postData.content[i].url;
            article.appendChild(excerptPara);
        }

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
const now = JSON.stringify(new Date());
const year = parseInt(now.substring(1,5));
const month = parseInt(now.substring(6,8));
const day = parseInt(now.substring(9,11));
const currentDate = day+'-'+month+'-'+year;
console.log(currentDate);

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function dayIndexFromDate(dateString) {
    const [day, month, year] = dateString.split('-').map(Number);
    const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let totalDays = day;
    for (let i = 0; i < month - 1; i++) {
        totalDays += daysInMonth[i];
    }
    return totalDays;
}

let totalDay;
if (isLeapYear(year)) totalDay = 366; else totalDay = 365;

console.log(dayIndexFromDate("12-12-2024"));

const dateCountsMap = new Map();

for (let i in data.approaching) {
    const date = data.approaching[i].date;
    const dayIndex = dayIndexFromDate(date);

    if (dateCountsMap.has(dayIndex)) {
        dateCountsMap.set(dayIndex, dateCountsMap.get(dayIndex) + data.approaching[i].content.length);
    } else {
        dateCountsMap.set(dayIndex, data.approaching[i].content.length);
    }
}

dateCountsMap.forEach((count, dayIndex) => {
    console.log(`Date: ${dayIndex}, Count: ${count}`);
});

const squares = document.querySelector('.squares');
for (var i = 1; i < totalDay; i++) {
    let level = dateCountsMap.get(i) || 0;
    if (level >= 1 && level <= 2) level = 1;
        else if (level >= 3 && level <= 6) level = 2;
            else if (level >= 7) level = 3;
    squares.insertAdjacentHTML('beforeend', `<li data-level="${level}" id="es-${i}"></li>`);
}

document.getElementById(`es-${dayIndexFromDate(currentDate)}`).style.cssText = `
    border: 1.5px solid #FAFAFA;
`;

for (let i = 1; i < totalDay; i++) {
    const element = document.getElementById(`es-${i}`);
    element.addEventListener('mouseover', () => {
        setLocalStorage(i, "ccdd");
        const posts = dateCountsMap.get(i) || 0;
        const tooltip = document.createElement('div');
        tooltip.textContent = `${posts} problems solved`;
        tooltip.style.cssText = `
            position: absolute;
            background-color: #333;
            color: white;
            padding: 5px;
            border-radius: 5px;
            top: ${element.offsetTop - 30}px;
            left: ${element.offsetLeft + 20}px;
            z-index: 100;
        `;

        document.body.appendChild(tooltip);
        element.addEventListener('mouseout', () => {
            tooltip.remove();
        });
    });
}
