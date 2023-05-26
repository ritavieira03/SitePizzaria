function openPDF() {
    window.open('./assets/VICENZOmenu.pdf', '_blank');
}

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

/// Call the function to add click event to restaurantes
addClickEventToRestaurante();

// Função para renderizar os vouchers
function renderVouchers() {
    // Valores dos vouchers
    let values = [50, 75, 100, 125, 150, 200, 300];

    // Buscar o container dos vouchers
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

// Função para trocar a visibilidade do destinatário
// e adicionar o atributo required ao input
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

// Função para validar o Formulário
function validateForm() {
    let radios = document.querySelectorAll('.voucher-radio-input');
    console.log(radios);
    return;
}

// Função para verificar os campos
// function reservar() {
//     var nome = document.getElementById("nome").value;
//     var email = document.getElementById("email").value;
//     var tel = document.getElementById("telemovel").value;
//     var data = document.getElementById("data").value;
//     var hora = document.getElementById("hora").value;
//     var pessoas = document.getElementById("pessoas").value;

//     if (nome == "" || email == "" || tel == "" || data == "" || hora == "" || pessoas == "") {
//         document.getElementById("aviso").innerHTML = "Existem campos vazios!";
//     }
// }

// Receber o elemento do formulário
const reservasForm = document.getElementById('reservas-form');

// EventListener para o form quando é submetido
reservasForm.addEventListener('submit', function(event) {
    // Prevenir o formulário de ser submetido antes de ser validado
    event.preventDefault();

    // Buscar elementos a serem validados
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("telemovel").value;
    let data = document.getElementById("data").value;
    let hora = document.getElementById("hora").value;
    let pessoas = document.getElementById("pessoas").value;

    // Validar nome
    if(nome.trim() == "") {
        displayError("O campo \"Nome Completo\" não pode estar vazio");
    } else {
        hideError();
    }

    // Validar email
    if(email.trim() == "") {
        displayError("O campo \"Email\" não pode estar vazio");
    } else {
        hideError();
    }

    // Validar tel
    if(tel.trim() == "") {
        displayError("O campo \"Telemóvel\" não pode estar vazio");
    } else {
        hideError();
    }

    // Validar data
    if(data.trim() == "") {
        displayError("O campo \"Data\" não pode estar vazio");
    } else {
        hideError();
    }

    // Validar hora
    if(hora.trim() == "") {
        displayError("O campo \"Hora\" não pode estar vazio");
    } else {
        hideError();
    }

    // Validar pessoas
    if(pessoas.trim() == "") {
        displayError("O campo \"Pessoa(s)\" não pode estar vazio");
    } else {
        hideError();
    }
});

// Função para renderizar o erro
function displayError(errorMessage) {
    // Buscar o elemento para mostrar o erro
    let errorElement = document.getElementById('aviso');
    if(errorElement.innerText.length == 0) {
        errorElement.innerText += errorMessage;
    } else {
        errorElement.innerText += ", " + errorMessage;
    }
}

// Função para esconder o erro
function hideError() {
    let errorElement = document.getElementById('aviso');
    errorElement.innerText = "";
}

// Função para renderizar as opções de horas e minutos para as opções
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