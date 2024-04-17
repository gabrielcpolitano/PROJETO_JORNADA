// Definição da função updateClock.
function updateClock() {
    // Cria um objeto Date que contém a data e hora atuais.
    const now = new Date();

    // Obtém a hora atual do objeto Date.
    let hours = now.getHours();
    // Obtém os minutos atuais do objeto Date.
    let minutes = now.getMinutes();
    // Obtém os segundos atuais do objeto Date.
    let seconds = now.getSeconds();

    // hours = hours < 10 então mostre 0 + hours caso contrario mostre hours
    hours = hours < 10 ? '0' + hours : hours;
    // minutes = minutes < 10 então mostre 0 + minutes caso contrario mostre minutes
    minutes = minutes < 10 ? '0' + minutes : minutes;
    // seconds = seconds < 10 então mostre 0 + minutes caso contrario mostre seconds
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Atualiza o conteúdo de texto do elemento HTML com id 'clock' para mostrar a hora atual formatado.
        document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Chama a função updateClock a cada 1000 milissegundos (1 segundo), mantendo o relógio atualizado.
setInterval(updateClock, 1000);
// Chama a função updateClock imediatamente ao carregar o script para que o relógio seja exibido sem atraso.
updateClock(); 