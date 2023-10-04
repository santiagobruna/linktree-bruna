function toggleMode() {
    const html = document.documentElement;
    // se tiver o light ele tira e se não tiver ele coloca
    html.classList.toggle('light');
}