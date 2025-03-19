document.getElementById("whatsappLink").addEventListener("click", function (e) {
    e.preventDefault() // Previne o comportamento padrão do link
    let numero = "5521975956657" 
    let mensagem = "Oi, gostaria de saber mais sobre os seus serviços!" // Mensagem predefinida
    let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem)

  window.open(url, "_blank") // Abre o link do WhatsApp em uma nova aba
})
function toggleMode() {
    const html = document.documentElement
  // se tiver o light ele tira e se não tiver ele coloca
    html.classList.toggle("light")
}
