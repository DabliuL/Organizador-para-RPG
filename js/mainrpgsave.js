function moveSquare(button) {
    var square = $(button).closest('.square');
    var currentIndex = square.index();

    if ($(button).hasClass('move-left') && currentIndex > 0) {
        square.insertBefore(square.prev());
    } else if ($(button).hasClass('move-right') && currentIndex < 7) {
        square.insertAfter(square.next());
    }
}

function addSquare() {
    var newSquare = $('<div class="square">' +
                        '<div class="btn-container">' +
                            '<div class="btn move-left" onclick="moveSquare(this)">←</div>' +
                            '<div class="btn remove-square" id="remove" onclick="removeSquare(this)">Remove</div>' +
                            '<div class="btn move-right" onclick="moveSquare(this)">→</div>' +

                        '</div>' +
                        '<div class="square-name" onclick="editSquare(this)">Novo Quadrado</div>' +
                        '<div class="square-life" onclick="editLife(this)">10/10</div>' +
                        '<div class="square-point" onclick="editPoint(this)">15/15</div>' +
                    '</div>');
    $('.row').append(newSquare);
}

function removeSquare(button) {
    var square = $(button).closest('.square');
    square.remove();
}

function editSquare(nameElement) {
    var newName = prompt("Digite o novo nome para o quadrado:", nameElement.textContent);
    if (newName !== null) {
        nameElement.textContent = newName;
    }
}

function editLife(lifeElement) {
    var newLife = prompt("Digite a nova vida no formato (vida máxima/vida atual):", lifeElement.textContent);
    if (newLife !== null) {
        lifeElement.textContent = newLife;
    }
}

function editPoint(pointElement) {
    var newPoint = prompt("Digite o novo Ponto de Energia ou mana no formato (PE ou PM máxima/PE ou PM atual):", pointElement.textContent);
    if (newPoint !== null) {
        pointElement.textContent = newPoint;
    }
}

function rollDice() {
    var diceResult = Math.floor(Math.random() * 6) + 1;
    $('#dice-result').text(diceResult);
}

function rollD20() {
    var d20Result = Math.floor(Math.random() * 20) + 1;
    $('#d20-result').text(d20Result);
}