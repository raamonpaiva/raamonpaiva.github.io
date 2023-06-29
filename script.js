function toggleMode() {
  /* pegando da dom o html */
  const html = document.documentElement
  /** muda os modes entre dark e light */
  html.classList.toggle("light")

  /* pega a tag image */
  const img = document.querySelector("#profile img")
  /* substitui a imagem de avatar de acordo com o modo(dark e light) */
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Perfil do Mayk Brito utilizando óculos de grau e jaqueta preta "
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Perfil do Mayk Brito utilizando óculos de sol e jaqueta preta "
    )
  }
}
