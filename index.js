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
            "title": "npm-free LiveReload(ish): Simple scripts for asset watching and auto-reload in the browser",
            "date": "12-05-2024",
            "urlTextContent": "A suaaaaaaaaaa aaaaaaaaa aaaaaaaaaa aaaaaaset-watching script and 'LiveReload' functionality. All fitting with my values. Let's see what it looks like!",
            "url": "https://rosswintle.uk/?fbclid=IwAR1DXBCzHtbdcME6XQhpvoiHqvPTH7x0vxP_38gUPJCGdqAJxMAnLEaZx84"
        },
        {
            "title": "A manifesto for small, static, web apps",
            "date": "21-08-2024",
            "urlTextContent": "I’m having a lot of fun building small, static web apps. And there are certain principles I’m trying to stick to as I do it. Let’s see what they are… What is a manifesto anyway? As I started writing this, I asked myself: “Is this actually a manifesto? What is a manifesto?” But the definition […]",
            "url": "https://rosswintle.uk/?fbclid=IwAR1DXBCzHtbdcME6XQhpvoiHqvPTH7x0vxP_38gUPJCGdqAJxMAnLEaZx84"
        },
        {
            "title": "ex3",
            "date": "09-12-2024",
            "urlTextContent": "Regular readers will know about my love of simple, static-hosted, web-based apps that are easy to build and maintain, and free to host. But they are held back by the lack of dynamic data. Sure, you can store data in local storage, but what if you want to share data between browsers? Is there a […]",
            "url": "https://rosswintle.uk/?fbclid=IwAR1DXBCzHtbdcME6XQhpvoiHqvPTH7x0vxP_38gUPJCGdqAJxMAnLEaZx84"
        },
        {
            "title": "Title 4",
            "date": "07-04-2024",
            "urlTextContent": "Content of Title 4",
            "url": "https://example.com/4"
        },
        {
            "title": "Title 5",
            "date": "15-03-2024",
            "urlTextContent": "Content of Title 5",
            "url": "https://example.com/5"
        },
        {
            "title": "Title 6",
            "date": "23-06-2024",
            "urlTextContent": "Content of Title 6",
            "url": "https://example.com/6"
        },
        {
            "title": "Title 7",
            "date": "19-09-2024",
            "urlTextContent": "Content of Title 7",
            "url": "https://example.com/7"
        },
        {
            "title": "Title 8",
            "date": "28-11-2024",
            "urlTextContent": "Content of Title 8",
            "url": "https://example.com/8"
        },
        {
            "title": "Title 9",
            "date": "31-10-2024",
            "urlTextContent": "Content of Title 9",
            "url": "https://example.com/9"
        },
        {
            "title": "Title 10",
            "date": "25-02-2024",
            "urlTextContent": "Content of Title 10",
            "url": "https://example.com/10"
        },
        {
            "title": "Title 11",
            "date": "14-05-2024",
            "urlTextContent": "Content of Title 11",
            "url": "https://example.com/11"
        },
        {
            "title": "Title 12",
            "date": "06-08-2024",
            "urlTextContent": "Content of Title 12",
            "url": "https://example.com/12"
        },
        {
            "title": "Title 13",
            "date": "17-09-2024",
            "urlTextContent": "Content of Title 13",
            "url": "https://example.com/13"
        },
        {
            "title": "Title 14",
            "date": "09-11-2024",
            "urlTextContent": "Content of Title 14",
            "url": "https://example.com/14"
        },
        {
            "title": "Title 15",
            "date": "12-03-2024",
            "urlTextContent": "Content of Title 15",
            "url": "https://example.com/15"
        },
        {
            "title": "Title 16",
            "date": "27-06-2024",
            "urlTextContent": "Content of Title 16",
            "url": "https://example.com/16"
        },
        {
            "title": "Title 17",
            "date": "03-01-2024",
            "urlTextContent": "Content of Title 17 - DP, Tree",
            "url": "https://example.com/17"
        },
        {
            "title": "Title 18",
            "date": "30-04-2024",
            "urlTextContent": "Content of Title 18",
            "url": "https://example.com/18"
        },
        {
            "title": "Title 19",
            "date": "18-07-2024",
            "urlTextContent": "Content of Title 19",
            "url": "https://example.com/19"
        },
        {
            "title": "Title 20",
            "date": "22-10-2024",
            "urlTextContent": "Content of Title 20",
            "url": "https://example.com/20"
        },
        {
            "title": "Title 21",
            "date": "05-12-2024",
            "urlTextContent": "Content of Title 21",
            "url": "https://example.com/21"
        },
        {
            "title": "Title 22",
            "date": "10-02-2024",
            "urlTextContent": "Content of Title 22",
            "url": "https://example.com/22"
        },
        {
            "title": "Title 23",
            "date": "08-04-2024",
            "urlTextContent": "Content of Title 23",
            "url": "https://example.com/23"
        },
        {
            "title": "Title 24",
            "date": "29-07-2024",
            "urlTextContent": "Content of Title 24",
            "url": "https://example.com/24"
        },
        {
            "title": "Title 25",
            "date": "01-06-2024",
            "urlTextContent": "Content of Title 25",
            "url": "https://example.com/25"
        },
        {
            "title": "Title 26",
            "date": "26-08-2024",
            "urlTextContent": "Content of Title 26",
            "url": "https://example.com/26"
        },
        {
            "title": "Title 27",
            "date": "02-03-2024",
            "urlTextContent": "Content of Title 27",
            "url": "https://example.com/27"
        },
        {
            "title": "Title 28",
            "date": "20-05-2024",
            "urlTextContent": "Content of Title 28",
            "url": "https://example.com/28"
        },
        {
            "title": "Title 29",
            "date": "24-01-2024",
            "urlTextContent": "Content of Title 29",
            "url": "https://example.com/29"
        },
        {
            "title": "Title 30",
            "date": "16-10-2024",
            "urlTextContent": "Content of Title 30",
            "url": "https://example.com/30"
        },
        {
            "title": "Title 31",
            "date": "11-11-2024",
            "urlTextContent": "Content of Title 31",
            "url": "https://example.com/31"
        },
        {
            "title": "Title 32",
            "date": "04-01-2024",
            "urlTextContent": "Content of Title 32",
            "url": "https://example.com/32"
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
        article.style.cssText = "padding: 10px;";

        const header = document.createElement('h3');
        header.style.cssText = "font-size: 18px; color: #AFAFAF;";

        const anchor = document.createElement('a');
        anchor.href = postData.url;
        anchor.textContent = postData.title;
        anchor.style.cssText = `
            color: white;
        `;

        header.appendChild(anchor);

        const meta = document.createElement('p');
        meta.className = "post-meta";
        meta.style.cssText = "font-style: italic; color: #666;";
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
const now = JSON.stringify(new Date());
const year = parseInt(now.substring(1,5));
const month = parseInt(now.substring(6,8));
const day = parseInt(now.substring(9,11));
// console.log(day, month, year);

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

// Iterate over the dates in the data and update the counts in the map
for (let i in data.approaching) {
    const date = data.approaching[i].date;
    const dayIndex = dayIndexFromDate(date);
    
    // Update the count for this date in the map
    if (dateCountsMap.has(dayIndex)) {
        dateCountsMap.set(dayIndex, dateCountsMap.get(dayIndex) + 1);
    } else {
        dateCountsMap.set(dayIndex, 1);
    }
}

// Output the counts
dateCountsMap.forEach((count, dayIndex) => {
    console.log(`Date: ${dayIndex}, Count: ${count}`);
});

const squares = document.querySelector('.squares');
for (var i = 1; i < totalDay; i++) {
  const level = dateCountsMap.get(i) || 0;
  squares.insertAdjacentHTML('beforeend', `<li data-level="${level}" id="es-${i}"></li>`);
}
