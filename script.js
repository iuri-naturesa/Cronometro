window.onload = function () {
  var segundos = 00;
  var min = 00;
  var somarMin = document.getElementById("min");
  var somarSegundos = document.getElementById("segundos");
  var botaoIniciar = document.getElementById("iniciar");
  var botaoParar = document.getElementById("parar");
  var botaoResetar = document.getElementById("resetar");
  var Interval;

  botaoIniciar.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  botaoParar.onclick = function () {
    clearInterval(Interval);
  };

  botaoResetar.onclick = function () {
    clearInterval(Interval);
    min = "00";
    segundos = "00";
    somarMin.innerHTML = min;
    somarSegundos.innerHTML = segundos;
  };

  function startTimer() {
    min++;

    if (min <= 9) {
      somarMin.innerHTML = "0" + min;
    }

    if (min > 9) {
      somarMin.innerHTML = min;
    }

    if (min > 99) {
      console.log("segundos");
      segundos++;
      somarSegundos.innerHTML = "0" + segundos;
      min = 0;
      somarMin.innerHTML = "0" + 0;
    }

    if (segundos > 9) {
      somarSegundos.innerHTML = segundos;
    }
  }
};
