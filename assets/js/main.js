// btn to top
const btn_to_top = document.querySelector('.btn-to-top');
btn_to_top.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
});

// todos os botões terão o mesmo efeito ao clicar
const btns_theme_color = document.querySelectorAll('.square-color');
btns_theme_color.forEach(btn => {
    btn.addEventListener('click', () => {
        // o efeito será alterar a cor principal do css
        document.documentElement.style.setProperty("--color-Main", `var(--${btn.classList[1]})`);
    });
});

// ação de clique no botão do perfil
const btn_user = document.querySelector('.user-wrapper h4');
const div_options_user = document.querySelector('.user-wrapper-inner');
btn_user.addEventListener('click', () => {
    div_options_user.classList.toggle('userWrapperInnerShow');
});