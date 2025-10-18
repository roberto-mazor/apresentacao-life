document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('themeToggle');
    
    // Elementos de link dos temas
    const lightThemeLink = document.getElementById('lightTheme');
    const darkThemeLink = document.getElementById('darkTheme');

    // Chave para salvar a preferência
    const themeKey = 'presentation-theme-file';

    if (!toggleButton || !lightThemeLink || !darkThemeLink) {
        console.error('Erro: Não foi possível encontrar o botão ou os links de tema.');
        return;
    }

    // Função para aplicar o tema
    function applyTheme(theme) {
        if (theme === 'dark') {
            lightThemeLink.disabled = true;
            darkThemeLink.disabled = false;
            toggleButton.innerHTML = 'Tema Claro ☀️';
            localStorage.setItem(themeKey, 'dark');
        } else {
            lightThemeLink.disabled = false;
            darkThemeLink.disabled = true;
            toggleButton.innerHTML = 'Tema Escuro 🌙';
            localStorage.setItem(themeKey, 'light');
        }
    }

    // 1. Carregar o tema salvo
    const savedTheme = localStorage.getItem(themeKey) || 'light';
    applyTheme(savedTheme);


    // 2. Adicionar o listener ao botão
    toggleButton.addEventListener('click', () => {
        const currentTheme = lightThemeLink.disabled ? 'dark' : 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
    });
});