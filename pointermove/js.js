document.addEventListener("mousemove", (event) => {
  // Få vinduets bredde
  const width = window.innerWidth;

  // Få musens x-position
  const x = event.clientX;

  // Beregn lysstyrke (0% - 100%)
  const lightness = (x / width) * 100;

  // Sæt baggrundsfarven til blå med variabel lysstyrke
  document.body.style.setProperty(
    "background-color",
    `hsl(110, 100%, ${lightness}%)`
  );
});

//Hvordan det virker med HSL
// Hue (H) = 220 (holder farven blå).
// Saturation (S) = 100% (holder den fuldt mættet).
// Lightness (L) = 0% til 100%, baseret på musens x-akse:
// Venstre side (0% lysstyrke) = mørk blå
// Højre side (100% lysstyrke) = lys blå

//mousemove, window.innerWidth, style.setProperty, clientX, procentregning: delen/detHele * 100
