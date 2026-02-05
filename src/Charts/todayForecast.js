function bar(value, unit) {
  return unit=='c'?"█".repeat(Math.round(value / 2)):"█".repeat(Math.round(value / 4));
}

export const drawBarChart = (maxTemp, minTemp, avgTemp, unit) => {
  console.log("\nMax Temp :", bar(maxTemp), `${maxTemp} ${unit=='c'?"°C":"°F"}\n`);
  console.log("Min Temp :", bar(minTemp), `${minTemp} ${unit=='c'?"°C":"°F"} \n`);
  console.log("Avg Temp :", bar(avgTemp), `${avgTemp} ${unit=='c'?"°C":"°F"} \n`);
}
