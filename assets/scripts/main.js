// Navbar Responsiva
function openNav() {
    document.getElementById("nav").style.width = "40%";
}

function closeNav() {
    document.getElementById("nav").style.width = "0";
}

// Abrir o pdf do Menu
function openPDF() {
    window.open('./assets/VICENZOmenu.pdf', '_blank');
}


// RESTAURANTES
function addClickEventToRestaurante() {
    // Get all the restaurant elements
    const restaurantes = document.getElementsByClassName('restaurante');

    // Loop through each restaurant element
    for (let i = 0; i < restaurantes.length; i++) {
      // Add a click event listener to each restaurant element
        restaurantes[i].addEventListener('click', function() {
            const restauranteInfo = this.querySelector('.restaurante-info');
            
            // Change the opacity of the restaurante-info to 1
            restauranteInfo.style.opacity = '1';
            // restaurantes[i].style.filter = 'saturate(1)';
            
            setTimeout(() => {
                restauranteInfo.style.opacity = '0';
                // restaurantes[i].style.filter = 'saturate(0)';
            }, 10000);
        });
    }
}

// RESERVAS
// Função para renderizar as opções de horas e minutos
function reservationTime() {
    let select = document.getElementById('hora');

    for(let i = 11; i <= 22; i++) {
        if((11 <= i && i <= 14) || (19 <= i && i <= 22)) {
            for(let j = 0; j <= 30; j += 30) {
                let newOption = document.createElement('option');
                newOption.setAttribute('value', `${i}:${j == 0 ? '00' : j}`);
                newOption.innerText = `${i}:${j == 0 ? '00' : j}`;
    
                select.appendChild(newOption);
            }
        }
    }
}

// E-VOUCHERS
function renderVouchers() {
    // Valores dos vouchers
    let values = [50, 75, 100, 125, 150, 200, 300];

    // Buscar o container dos e-vouchers
    let container = document.getElementById('voucher-wrapper');

    for(let i = 0; i < values.length; i++) {
        let newRadio = document.createElement('input');
        newRadio.setAttribute('type', 'radio');
        newRadio.setAttribute('name', 'voucher');
        newRadio.setAttribute('class', 'voucher-radio-input')
        newRadio.setAttribute('id', `voucher-${values[i]}`);

        // Adiciona o radio button ao container
        container.appendChild(newRadio);

        // Criar a label para cada radio
        let newLabel = document.createElement('label');
        newLabel.setAttribute('for', `voucher-${values[i]}`);
        newLabel.setAttribute('class', 'voucher-radio-label rounded');
        newLabel.innerText = `${values[i]}€`;
        
        // Adiciona a label ao container
        container.appendChild(newLabel);
    }
}

// Função para trocar a visibilidade do destinatário e adicionar o atributo required ao input
function controllerVoucherDest() {
    // Buscar a checkbox
    let input = document.getElementById('oferta');
    // Buscar o nome do destinatário + div
    let dest = document.getElementById('nome_dest');
    let dest_div = document.getElementById('nome_dest_div');
    
    if(input.checked) {
        dest_div.classList.remove('hidden');
        dest.setAttribute('required', '');
    } else {
        dest_div.classList.add('hidden');
        dest.removeAttribute('required');
    }
    
    // Buscar a mensagem para o destinatário + div
    let msgdest_div = document.getElementById('msg_dest_div');

    if(input.checked) {
        msgdest_div.classList.remove('hidden');
    } else {
        msgdest_div.classList.add('hidden');
    }
}

// FORMULÁRIOS
const formreservas = document.getElementById("reservas-form");
const formevouchers = document.getElementById("evouchers-form");
const campos = document.querySelectorAll(".valida");
const avisos = document.querySelectorAll(".aviso");
const emailrestricao = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const telrestricao = /^(9[1236]\d{7}|2\d{8})$/;

function setError(index) {
    avisos[index].style.display = "block";
}

function removeError(index) {
    avisos[index].style.display = "none";
}

function validarNome() {
    if (campos[0].value.length < 3) {
        setError(0);
    }
    else if (campos[0].value.match(/[0-9]/)) {
        setError(0);
    }
    else {
        removeError(0);
    }
}

function validarEmail() {
    if (!emailrestricao.test(campos[1].value)) {
        setError(1);
    }
    else {
        removeError(1);
    }
}

function validarTelemovel() {
    if (!telrestricao.test(campos[2].value)) {
        setError(2);
    }
    else {
        removeError(2);
    }
}

function validarNomeDest() {
    if (campos[3].value.length < 3) {
        setError(3);
    }
    else if (campos[3].value.match(/[0-9]/)) {
        setError(3);
    }
    else {
        removeError(3);
    }
}

function validarReserva() {
    alert("Reserva concluída!")
}

function validarVoucher() {
    alert("e-Voucher criado!")
}