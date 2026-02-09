let count = 0;

function increment() {
    count++;
    document.getElementById("count").innerText = count;
}

function decrement() {
    count--;
    document.getElementById("count").innerText = count;
}

function saveName() {
    const name = document.getElementById("nameInput").value;
    localStorage.setItem("username", name);
    showWelcome();
}

function showWelcome() {
    const name = localStorage.getItem("username");
    if (name) {
        document.getElementById("welcome").innerText = `Welcome, ${name} 👋`;
    }
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}

showWelcome();
