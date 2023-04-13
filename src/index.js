import { homepage } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

let top = {
    load: function() {
        const content = document.getElementById('content');
        const top = document.createElement('div');
        top.setAttribute('id', 'top');
        content.append(top);


        for (let i = 0; i < homepage.navigation.length; i++) {
            const div = document.createElement('div');
            div.innerText = homepage.navigation[i];
            div.setAttribute('class','top-buttons');
            top.append(div);
            div.addEventListener('click', () => {
                const home = document.getElementById('home');
                const menu = document.getElementById('menu');
                const about = document.getElementById('about');
                if(div.innerText === 'Home') {
                    home.style.display = 'flex';
                    menu.style.display = 'none';
                    about.style.display = 'none';
                } else if(div.innerText === 'Menu') {
                    home.style.display = 'none';
                    menu.style.display ='flex';
                    about.style.display = 'none';
                } else if(div.innerText === 'About') {
                    home.style.display = 'none';
                    menu.style.display ='none';
                    about.style.display = 'flex';
                }
            })

        };
    }
}

top.load();

let homeTab = {
    load: function() {
        const content = document.getElementById('content');
        const home = document.createElement('div');
        const middle = document.createElement('div');
        const bottom = document.createElement('div');
        const title = document.createElement('div');
        bottom.setAttribute('id', 'bottom');
        middle.setAttribute('id', 'middle');
        home.setAttribute('id', 'home');
        title.setAttribute('id', 'title');
        content.append(home);
        
        home.append(title, middle, bottom);

        title.innerText = homepage.name;

        bottom.innerText = homepage.description;
        let image = document.createElement('img');
        image.setAttribute('id','welcome-picture');
        image.src = homepage.picture;
        middle.appendChild(image);
    }
}

homeTab.load();

let menuTab = {
    load: function() {
        const content = document.getElementById('content');
        let food = document.createElement('div');
        food.setAttribute('id', 'menu');
        content.append(food);
        for(let i = 0; i < Object.keys(menu).length; i++) {
            const div = document.createElement('div');
            div.setAttribute('class','food-container');
            const foodName = document.createElement('div');
            const foodDescription = document.createElement('div');
            foodName.setAttribute('class','food-name');
            foodDescription.setAttribute('class', 'food-description');
            food.append(div);
            div.append(foodName, foodDescription);
            foodName.innerText = Object.keys(menu)[i];
            foodDescription.innerText = menu[Object.keys(menu)[i]];
        }
    }
}
menuTab.load();

let aboutTab = {
    load: function() {
        const content = document.getElementById('content');
        let info = document.createElement('div');
        info.setAttribute('id', 'info');
        let story = document.createElement('div');
        story.setAttribute('id', 'story');
        let weekdayHours = document.createElement('div');
        weekdayHours.setAttribute('id','weekday-hours');
        let weekendHours = document.createElement('div');
        weekendHours.setAttribute('id','weekend-hours');
        let address = document.createElement('div');
        address.setAttribute('id','address');
        info.setAttribute('id', 'about');
        content.append(info);
        info.append(story, weekdayHours, weekendHours, address);
        story.innerText = about.info;
        weekdayHours.innerText = about.hours[0];
        weekendHours.innerText = about.hours[1];
        address.innerText = about.address;
    }
}

aboutTab.load();
