function setLocalStorage(data, address){
    localStorage.setItem(address, JSON.stringify(data));
}

function getLocalStorage(address){
    let data = JSON.parse(localStorage.getItem(address)); 
    return data;
}

import { data } from './data.js';  

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
            setLocalStorage (parseInt(input.value), "cp");
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
        let tagContainer = document.createElement('div');
        tagContainer.setAttribute('id', `tc-${index}`);
        tagContainer.style.cssText = `
            display: flex;
            flex-wrap: wrap;
        `;
        let addTag = document.createElement('div');
        addTag.setAttribute("class", 'a-tag');
        addTag.style.cssText = `
            margin: 5px;
            font-size: 14px;
            border-radius: 5px;
            border: 2px dashed #abb8c3;
            display: inline-block;
            padding-inline: 5px;
        `;
        addTag.innerHTML = '+ add tag';
        tagContainer.appendChild(addTag);
        post.appendChild(tagContainer);
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
console.log();

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

// tags render

import { tags } from './data.js';

let tagsBox = document.querySelector('.tags-box');

for (let i of tags.collection) {
    let tags = document.createElement('div');
    tags.innerHTML = i.name;
    tags.style.cssText = `
        background-color: ${i.color};
        margin: 5px;
        font-size: 14px;
        border-radius: 5px;
        padding-inline: 5px;
    `;
    tagsBox.appendChild(tags);
}

// Function to create tag container below each post
function createTagContainer() {
    const tagContainer = document.createElement('div');
    tagContainer.className = 'tag-container';
    return tagContainer;
}

function createTagSelectionBox(post, tagContainer) {
    const tagSelectionBox = document.createElement('div');
    tagSelectionBox.className = 'tag-selection-box';
    tagSelectionBox.style.cssText = `
        display: flex;
        flex-direction: column;
        position: absolute;
        background-color: #ffffff;
        border: 1px solid #cccccc;
        padding: 5px;
        width: 200px;
        max-height: 200px;
        overflow-y: auto;
        top: calc(100% + 5px);
        left: 0; 
        z-index: 999; 
    `;

    // Iterate through each tag and create a button for selection
    for (let tag of tags.collection) {
        const tagButton = document.createElement('button');
        tagButton.textContent = tag.name;
        tagButton.style.backgroundColor = tag.color;
        tagButton.style.marginBottom = '5px'; // Add margin between options
        tagButton.className = 'post-tag'; // Add class for consistent styling
        
        // Add event listener for tag selection
        tagButton.addEventListener('click', () => {
            // Create tag element
            const postTag = document.createElement('div');
            postTag.textContent = tag.name;
            postTag.style.backgroundColor = tag.color;
            postTag.className = 'post-tag';
            postTag.style.cssText = `
                background-color: ${tag.color};
                margin: 5px;
                font-size: 14px;
                border-radius: 5px;
                padding-inline: 5px;
                display: inline-block;
            `;
            
            // Add tag to the tag container
            tagContainer.appendChild(postTag);
            
            // Remove tag selection box
            tagSelectionBox.remove();
            
            // Here you can handle saving the selected tag to your data structure
        });
        
        tagSelectionBox.appendChild(tagButton);
    }
    
    return tagSelectionBox;
}




// Add event listeners to all "add tag" buttons
document.querySelectorAll('.a-tag').forEach(button => {
    button.addEventListener('click', (event) => {
        const post = event.target.closest('li');
        const postIndex = Array.from(post.parentNode.children).indexOf(post); // Get the index of the post in its parent
        let tagContainer = document.getElementById(`tc-${postIndex}`); // Get the corresponding tag container

        // Create tag container if it doesn't exist
        if (!tagContainer) {
            tagContainer = document.createElement('div');
            tagContainer.id = `tc-${postIndex}`; // Assign a unique ID to the tag container based on the post index
            tagContainer.style.cssText = `
                display: flex;
                flex-wrap: wrap;
            `;
            post.appendChild(tagContainer); // Append tag container to post
        }

        // Check if a tag selection box already exists
        const existingTagSelectionBox = tagContainer.querySelector('.tag-selection-box');
        
        // If tag selection box is already open, close it and return
        if (existingTagSelectionBox) {
            existingTagSelectionBox.remove();
            return;
        }
        
        // Create and append tag selection box within the tag container
        const tagSelectionBox = createTagSelectionBox(post, tagContainer);
        tagContainer.appendChild(tagSelectionBox);

        // Position the tag selection box below the "add tag" button
        const buttonRect = button.getBoundingClientRect();
        tagSelectionBox.style.position = 'absolute';
        tagSelectionBox.style.left = `${buttonRect.left}px`;
        tagSelectionBox.style.top = `${buttonRect.bottom}px`;

        // Update tag container CSS to display inline
        tagContainer.style.display = 'inline-block';
        tagContainer.style.position = 'relative'; // Ensure proper positioning of tag selection box
    });
});


// Event listener to remove tag when clicked
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('post-tag')) {
        event.target.remove();
        // Here you can handle removing the tag from your data structure
    }
});

