// todos os botões terão o mesmo efeito ao clicar
const btns_theme_color = document.querySelectorAll('.square-color');
btns_theme_color.forEach(btn => {
    btn.addEventListener('click', () => {
        // o efeito será alterar a cor principal do css
        document.documentElement.style.setProperty("--color-Main", `var(--${btn.classList[1]})`);
    });
});

// ação de clique no botão do perfil
const btn_user = document.querySelector('.user-wrapper');
const div_options_user = document.querySelector('.user-wrapper-inner');
btn_user.addEventListener('click', () => {
    div_options_user.classList.toggle('user-wrapper-inner--show');
});