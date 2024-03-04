let data = {
    approaching : [
        {
            "title": "npm-free LiveReload(ish): Simple scripts for asset watching and auto-reload in the browser",
            "date": "Day 1",
            "urlTextContent": "A suaaaaaaaaaa aaaaaaaaa aaaaaaaaaa aaaaaaset-watching script and 'LiveReload' functionality. All fitting with my values. Let's see what it looks like!",
            "url": "https://rosswintle.uk/?fbclid=IwAR1DXBCzHtbdcME6XQhpvoiHqvPTH7x0vxP_38gUPJCGdqAJxMAnLEaZx84" //ex 1
        },
        {
            "title": "A manifesto for small, static, web apps",
            "date": "Day 2",
            "urlTextContent": "I’m having a lot of fun building small, static web apps. And there are certain principles I’m trying to stick to as I do it. Let’s see what they are… What is a manifesto anyway? As I started writing this, I asked myself: “Is this actually a manifesto? What is a manifesto?” But the definition […]",
            "url": "https://rosswintle.uk/?fbclid=IwAR1DXBCzHtbdcME6XQhpvoiHqvPTH7x0vxP_38gUPJCGdqAJxMAnLEaZx84" //ex 2
        },
        {
            "title": "ex3",
            "date": "Day 3",
            "urlTextContent": "Regular readers will know about my love of simple, static-hosted, web-based apps that are easy to build and maintain, and free to host. But they are held back by the lack of dynamic data. Sure, you can store data in local storage, but what if you want to share data between browsers? Is there a […]",
            "url": "https://rosswintle.uk/?fbclid=IwAR1DXBCzHtbdcME6XQhpvoiHqvPTH7x0vxP_38gUPJCGdqAJxMAnLEaZx84" //ex 3
        },
        {
            "title": "npm-free LiveReload(ish): Simple scripts for asset watching and auto-reload in the browser",
            "date": "Day 1",
            "urlTextContent": "A super simple asset-watching script and 'LiveReload' functionality. All fitting with my values. Let's see what it looks like!",
            "url": "https://rosswintle.uk/?fbclid=IwAR1DXBCzHtbdcME6XQhpvoiHqvPTH7x0vxP_38gUPJCGdqAJxMAnLEaZx84" //ex 1
        },
        {
            "title": "A manifesto for small, static, web apps",
            "date": "Day 2",
            "urlTextContent": "I’m having a lot of fun building small, static web apps. And there are certain principles I’m trying to stick to as I do it. Let’s see what they are… What is a manifesto anyway? As I started writing this, I asked myself: “Is this actually a manifesto? What is a manifesto?” But the definition […]",
            "url": "https://rosswintle.uk/?fbclid=IwAR1DXBCzHtbdcME6XQhpvoiHqvPTH7x0vxP_38gUPJCGdqAJxMAnLEaZx84" //ex 2
        },
        {
            "title": "ex3",
            "date": "Day 3",
            "urlTextContent": "Regular readers will know about my love of simple, static-hosted, web-based apps that are easy to build and maintain, and free to host. But they are held back by the lack of dynamic data. Sure, you can store data in local storage, but what if you want to share data between browsers? Is there a […]",
            "url": "https://rosswintle.uk/?fbclid=IwAR1DXBCzHtbdcME6XQhpvoiHqvPTH7x0vxP_38gUPJCGdqAJxMAnLEaZx84" //ex 3
        },
        {
            "title": "npm-free LiveReload(ish): Simple scripts for asset watching and auto-reload in the browser",
            "date": "Day 1",
            "urlTextContent": "A super simple asset-watching script and 'LiveReload' functionality. All fitting with my values. Let's see what it looks like!",
            "url": "https://rosswintle.uk/?fbclid=IwAR1DXBCzHtbdcME6XQhpvoiHqvPTH7x0vxP_38gUPJCGdqAJxMAnLEaZx84" //ex 1
        },
        {
            "title": "A manifesto for small, static, web apps",
            "date": "Day 2",
            "urlTextContent": "I’m having a lot of fun building small, static web apps. And there are certain principles I’m trying to stick to as I do it. Let’s see what they are… What is a manifesto anyway? As I started writing this, I asked myself: “Is this actually a manifesto? What is a manifesto?” But the definition […]",
            "url": "https://rosswintle.uk/?fbclid=IwAR1DXBCzHtbdcME6XQhpvoiHqvPTH7x0vxP_38gUPJCGdqAJxMAnLEaZx84" //ex 2
        },
        {
            "title": "ex3",
            "date": "Day 3",
            "urlTextContent": "Regular readers will know about my love of simple, static-hosted, web-based apps that are easy to build and maintain, and free to host. But they are held back by the lack of dynamic data. Sure, you can store data in local storage, but what if you want to share data between browsers? Is there a […]",
            "url": "https://rosswintle.uk/?fbclid=IwAR1DXBCzHtbdcME6XQhpvoiHqvPTH7x0vxP_38gUPJCGdqAJxMAnLEaZx84" //ex 3
        }
        
    ]
}

function renderPosts(data) {
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

    let rowDiv; // Variable to hold the current row div

    approachingPosts.forEach((postData, index) => {
        // Create a new row div for every second post
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
        
        // Append the post to the current row div
        rowDiv.appendChild(post);

        // If it's the last post in the row or the last post overall, append the row div to the container
        if ((index + 1) % 2 === 0 || index === approachingPosts.length - 1) {
            container.appendChild(rowDiv);
        }
    });

    return container;
}


const postsContainer = document.querySelector('.posts-container');

postsContainer.appendChild(renderPosts(data));
console.log(data);

