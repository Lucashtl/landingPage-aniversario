AOS.init();


const dataDoEvento = new Date('Feb 13, 2025 00:00:00');
const timestamp = dataDoEvento.getTime();

const contadorAteAniversario = setInterval(function () {
    const agora = new Date();
    const timestampAgora = agora.getTime();
    const tempoRestante = timestamp - timestampAgora;

    const DiasAteoEvento = Math.floor((tempoRestante / (1000 * 60 * 60 * 24)));
    const HorasAteoEvento = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosAteoEvento = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundosAteoEvento = Math.floor((tempoRestante % (1000 * 60)) / (1000));


    document.getElementById('contador').innerHTML = `${DiasAteoEvento}D ${HorasAteoEvento}H ${minutosAteoEvento}M ${segundosAteoEvento}S`
}, 1000)