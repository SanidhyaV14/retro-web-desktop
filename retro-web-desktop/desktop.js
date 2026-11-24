
const user = localStorage.getItem("WebDeskUser");
const banner = document.getElementById("userbanner");

if (user !== null && banner !== null) {
    banner.innerText = "User: " + user;
}

function logoutUser() {
    localStorage.removeItem("WebDeskUser");
    window.location.href = "index.html";
}


const startBtn = document.getElementById('startBtn');
const startMenu = document.getElementById('start');

startBtn.onclick = function(event) {
    event.stopPropagation();
    if (startMenu.style.display === 'flex') {
        startMenu.style.display = 'none';
    } else {
        startMenu.style.display = 'flex';
    }
};

document.onclick = function() {
    startMenu.style.display = 'none';
};


let topidx = 10;
let draggedWindow = null;
let mouseOffsetX = 0;
let mouseOffsetY = 0;


function spawnApp(title, file, icon) {
    const win = document.createElement('div');
    win.className = 'window';
    win.style.top = '80px';
    win.style.left = '120px';

    topidx = topidx + 1;
    win.style.zIndex = topidx;

    win.innerHTML = 
        '<div class="title">' +
            '<div class="title-left">' +
                '<img src="' + icon + '" class="title-icon">' +
                '<span class="title-text">' + title + '</span>' +
            '</div>'+
            '<div class="controls">' +
                '<button class="ctrl-btn">_</button>' +
                '<button class="ctrl-btn">🗖</button>' +
                '<button class="ctrl-btn close-btn">X</button>' +
            '</div>' +
        '</div>' +
        '<div class="content">' +
            '<iframe src="' + file + '"></iframe>' +
        '</div>';
        
    win.onmousedown = function() {
        topidx = topidx + 1;
        win.style.zIndex = topidx;
    };

    const closeBtn = win.querySelector('.close-btn');
    closeBtn.onclick = function() {
        win.remove();
    };


    const titlebar = win.querySelector('.title');

    titlebar.onmousedown = function(event) {
        if (event.target.classList.contains('ctrl-btn')) 
            return;

        draggedWindow = win;
        mouseOffsetX = event.clientX - win.offsetLeft;
        mouseOffsetY = event.clientY - win.offsetTop;
    };

    document.getElementById('desktop').appendChild(win);
}

document.onmousemove = function(event) {
    if (draggedWindow !== null) {
        let newLeft = event.clientX - mouseOffsetX;
        let newTop = event.clientY - mouseOffsetY;
        draggedWindow.style.left = newLeft + 'px';
        draggedWindow.style.top = newTop + 'px';
    }
};

document.onmouseup = function() {
    draggedWindow = null;
};


function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = 'AM';
    if (hours >= 12) {
        ampm = 'PM';
    }
    if (hours > 12) {
        hours = hours - 12;
    }
    if (hours === 0) {
        hours = 12;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    document.getElementById('clock').innerText = hours + ':' + minutes + ' ' + ampm;
}

updateClock();