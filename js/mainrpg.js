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
                        '<div class="square-name" onclick="editSquare(this)">Gnu</div>' +
                        '<div class="square-life" onclick="editLife(this)">?</div>' +
                        '<div class="square-point" onclick="editPoint(this)">?</div>' +
                    '</div>');
    $('.row').append(newSquare);
}

function addBoss() {
    var newBoss = $('<div class="square">' +
                        '<img id="avatar" src="img/huntress.jpg">' +
                        '<div class="btn-container">' +
                            '<div class="btn move-left" onclick="moveSquare(this)">←</div>' +
                            '<div class="btn remove-square" id="remove" onclick="removeSquare(this)">Remove</div>' +
                            '<div class="btn move-right" onclick="moveSquare(this)">→</div>' +

                        '</div>' +
                        '<div class="square-name" onclick="editSquare(this)">Boss</div>' +
                        '<div class="square-life" onclick="editLife(this)">?</div>' +
                        '<div class="square-point" onclick="editPoint(this)">?</div>' +
                    '</div>');
    $('.row').append(newBoss);
}

function addpet() {
    var newBoss = $('<div class="square">' +
                        '<img id="avatar" src="img/charmander.jpeg">' +
                        '<div class="btn-container">' +
                            '<div class="btn move-left" onclick="moveSquare(this)">←</div>' +
                            '<div class="btn remove-square" id="remove" onclick="removeSquare(this)">Remove</div>' +
                            '<div class="btn move-right" onclick="moveSquare(this)">→</div>' +

                        '</div>' +
                        '<div class="square-name" onclick="editSquare(this)">Charmander</div>' +
                        '<div class="square-life" onclick="editLife(this)">45</div>' +
                        '<div class="square-point" onclick="editPoint(this)">?</div>' +
                    '</div>');
    $('.row').append(newBoss);
}

function removeSquare(button) {
    var square = $(button).closest('.square');
    square.remove();
}

//Inputs
var fundo = window.document.getElementById('fundo')
var selectn = '0'
function editSquare(nameElement) {
    selectn = nameElement
    var callname = window.document.getElementById('cname')
    callname.style.top = '50%'
    callname.style.left = '50%'
    callname.style.opacity = '100%'
    fundo.style.top = '50%'
    fundo.style.opacity = '40%'
}

function editSquare2() {
    var nm = window.document.getElementById('name')
    var newName = nm.value;
    if (newName !== '') {
        selectn.textContent = newName;
    }
    var callname = window.document.getElementById('cname')
    callname.style.top = '-50%'
    callname.style.left = '50%'
    callname.style.opacity = '0%'
    nm.value=''
    fundo.style.top = '-90%'
    fundo.style.opacity = '0%'
    localStorage.setItem('NomePersonagem', newName)
}


function editLife(lifeElement) {
    selectn = lifeElement
    var calllife = window.document.getElementById('clife')
    calllife.style.top = '50%'
    calllife.style.left = '50%'
    calllife.style.opacity = '100%'
    fundo.style.top = '50%'
    fundo.style.opacity = '40%'
}

function editLife2() {
    var lf = window.document.getElementById('life')
    var replace = lf.value;
    var replace2 = replace.replace(/[a-z]/g, "")
    var newLife = replace2.replace(/[A-Z]/g, "")
    if (newLife !== '') {
        selectn.textContent = newLife;
    }
    var calllife = window.document.getElementById('clife')
    calllife.style.top = '-50%'
    calllife.style.left = '50%'
    calllife.style.opacity = '0%'
    lf.value=''
    fundo.style.top = '-90%'
    fundo.style.opacity = '0%'
}

function editPoint(pointElement) {
    selectn = pointElement
    var callpoint = window.document.getElementById('cpoint')
    callpoint.style.top = '50%'
    callpoint.style.left = '50%'
    callpoint.style.opacity = '100%'
    fundo.style.top = '50%'
    fundo.style.opacity = '40%'
}

function editPoint2() {
    var pt = window.document.getElementById('point')
    var replace = pt.value;
    var replace2 = replace.replace(/[a-z]/g, "")
    var newPoint = replace2.replace(/[A-Z]/g, "")
    if (newPoint !== '') {
        selectn.textContent = newPoint;
    }
    var callpoint = window.document.getElementById('cpoint')
    callpoint.style.top = '-50%'
    callpoint.style.left = '50%'
    callpoint.style.opacity = '0%'
    pt.value=''
    fundo.style.top = '-90%'
    fundo.style.opacity = '0%'
}

//rolagens de dados
var Resultado = window.document.getElementById('dice-result')
    Resultado.style.left = '51.4%'

function rollDice() {
    var image = window.document.getElementById('d20menu')
    image.style.opacity = '0%'
    var diceResult = Math.floor(Math.random() * 6) + 1;
    $('#dice-result').text(diceResult);
    document.getElementById('rollsd').play();
    Resultado.style.left = '51.4%'
    return closeMenu()
}

function roll3d6() {
    var image = window.document.getElementById('d20menu')
    image.style.opacity = '0%'
    var d3d6Result = Math.floor(Math.random() * 15) + 4;
    $('#dice-result').text(d3d6Result);
    document.getElementById('rollsd').play();
    if (d3d6Result < 10) {
        Resultado.style.left = '51.4%'
    }
    if (d3d6Result >= 10) {
        Resultado.style.left = '50.7%'
    }
    return closeMenu()
}

function roll2d6() {
    var image = window.document.getElementById('d20menu')
    image.style.opacity = '0%'
    var d2d6Result = Math.floor(Math.random() * 9) + 3;
    $('#dice-result').text(d2d6Result);
    document.getElementById('rollsd').play();
    if (d2d6Result < 10) {
        Resultado.style.left = '51.4%'
    }
    if (d2d6Result >= 10) {
        Resultado.style.left = '50.7%'
    }
    return closeMenu()
}

//Menu
function callMenu() {
    var menuBox = window.document.getElementById('MenuBox')
    menuBox.style.top = '80%'
    menuBox.style.left = '45%'
    menuBox.style.width = '100px'
    menuBox.style.height = '35px'
    menuBox.style.opacity = '100%'
    var Dicebtn = window.document.getElementById('dicebtn')
    Dicebtn.style.opacity = '100%'
    var Dicebtn = window.document.getElementById('dicebtn2')
    Dicebtn.style.opacity = '100%'
    var Dicebtn = window.document.getElementById('dicebtn3')
    Dicebtn.style.opacity = '100%'
}

function closeMenu() {
    var menuBox = window.document.getElementById('MenuBox')
    menuBox.style.top = '90%'
    menuBox.style.left = '50%'
    menuBox.style.width = '1px'
    menuBox.style.height = '1px'
    menuBox.style.opacity = '0%'
    var Dicebtn = window.document.getElementById('dicebtn')
    Dicebtn.style.opacity = '0%'
    var Dicebtn = window.document.getElementById('dicebtn2')
    Dicebtn.style.opacity = '0%'
    var Dicebtn = window.document.getElementById('dicebtn3')
    Dicebtn.style.opacity = '0%'
}
