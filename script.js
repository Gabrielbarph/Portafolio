const canvas = document.querySelector(".grain");
const context = canvas.getContext("2d");

const resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

const createNoise = () => {
  const imageData = context.createImageData(canvas.width, canvas.height);
  for (let i = 0; i < imageData.data.length; i += 4) {
    const shade = Math.random() * 255;
    imageData.data[i] = shade;
    imageData.data[i + 1] = shade;
    imageData.data[i + 2] = shade;
    imageData.data[i + 3] = 20;
  }
  context.putImageData(imageData, 0, 0);
};

const animate = () => {
  createNoise();
  requestAnimationFrame(animate);
};

resizeCanvas();
animate();

window.addEventListener("resize", resizeCanvas);
