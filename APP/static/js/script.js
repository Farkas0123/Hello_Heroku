function play() {
    hang.play()
}

window.onload = () => {
    document.getElementById("gomb")?.addEventListener("click", play)
}