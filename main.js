// swiper 

window.addEventListener("DOMContentLoaded", async () => {
  fetch('https://picsum.photos/v2/list?page=2&limit=100')
    .then(response => {
      if (!response) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data)
      let slider = document.querySelector(".swiper-wrapper");
      data.forEach(element => {
          const slide = document.createElement("div");
          slide.classList.add("swiper-slide");
          const image = document.createElement("img");
          image.src = element.download_url;
          image.classList.add("swiper-slide")
          slider.appendChild(slide);
          slide.appendChild(image);
      });
      const swiper = new Swiper('.slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        allowTouchMove: true,
        effect: 'fade',

        // If we need pagination
        pagination: false,

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
    })
    .catch(error => {
      // Manejar el error
      console.error('Error:', error);
    });
})

// Grafica 1

const labels = ["06", "07", "08", "09", "10", "11", "12", "13", "14", "15"];
const data = {
  labels: labels,
  datasets: [{
      label: "A",
      data: [100, 200, 150, 145, 56, 123, 167, 123, 278, 131],
      backgroundColor: "#fff", // Color de fondo de las barras para Ventas A
      borderWidth: 1,
      borderRadius: 100,
      barThickness: 13,
    },
    {
      legend: "B",
      data: [150, 100, 200, 175, 56, 23, 123, 56, 123, 123],
      backgroundColor: "#22DBBA",
      borderWidth: 1,
      borderRadius: 100,
      barThickness: 13,
    }
  ]
};

const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      x: {
        grid: {
          color: false,
          lineWidth: 1,
        },
        ticks: {
          color: "#fff"
        }
      },
      y: {
        display: false,
        grid: {
          color: false,
          lineWidth: 1,
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Ocultar los labels
      },
      tooltip: {
        font: {
          family: 'Arial', // Cambiar la fuente a Arial
          size: 12, // Tamaño de la fuente en píxeles
        },
      },
    },
  },
};

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, config);