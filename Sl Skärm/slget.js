const getSl = async () => {
  const response = await fetch('/getInfo');
  const myJson = await response.json();
  var data = JSON.parse(myJson);
  document.getElementById("time").textContent = "Bussen lämmnar om: " + data.ResponseData.Buses[0].DisplayTime
  document.getElementById("expectedtime").textContent = "Bussen ska gå kl:" + data.ResponseData.Buses[0].ExpectedDateTime.split("T")[1];
}
const timer = async () => {
  getSl();
  setInterval(async function () {
    getSl();
  }, 1000 * 60 * 1)
}
document.onload = timer();