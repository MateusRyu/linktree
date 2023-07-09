// Verificar a preferência do usuário ao carregar a página
window.onload = function() {
    var prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var toggleSwitch = document.getElementById('toggle-switch');
    var body = document.body;
    
    if (prefersDarkMode) {
        toggleSwitch.checked = true;
        body.classList.add("dark-mode");
    }
};

function toggleMode() {
    var toggleSwitch = document.getElementById('theme-switch');
    var body = document.body;

    body.classList.toggle("dark-mode");
}