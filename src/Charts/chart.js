import { ChartJSNodeCanvas } from "chartjs-node-canvas";

const width = 800;
const height = 400;

const chartJSNodeCanvas = new ChartJSNodeCanvas({ width, height });

export async function generateForecastChart(days, temps, unit = "°C") {
  const config = {
    type: "line",
    data: {
      labels: days,
      datasets: [
        {
          label: `Temperature Forecast (${unit})`,
          data: temps,
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderWidth: 3,
          tension: 0.3,
          fill: true,
          pointRadius: 5,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
          grid: { color: "rgba(200,200,200,0.2)" }
        },
        x: {
          grid: { display: false }
        }
      },
      plugins: {
        legend: { display: true },
        title: {
          display: true,
          text: "7-Day Temperature Forecast",
          font: { size: 20 }
        }
      }
    }
  };

  // Render 
  const buffer = await chartJSNodeCanvas.renderToBuffer(config);

  // Save
  const fs = await import("fs");
  let today = new Date();
  let fileName = today.toLocaleDateString().replaceAll('/', '-')
  fs.writeFileSync(`./src/Charts/forecasts/${fileName}.png`, buffer);

  console.log(`Forecast chart saved as ${fileName}.png`);
}
