// task 0
let player1 = {
    name: 'Scorpion',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['sword', 'kunai', 'magic'],
    attack: function() {
        console.log(player1.name + 'Fight...');
    }
};

let player2 = {
    name: 'Kitana',
    hp: 60,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon:  ['sword', 'kunai', 'magic'],
    attack: function() {
        console.log(player2.name + 'Fight...');
    }
};

// task 2
function createPlayer(player, name, hp, img) {
    let $player = document.createElement('div');
    $player.classList.add(player);

    let $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    let $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = '100%';

    let $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = name;
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    let $character = document.createElement('div');
    $character.classList.add('character');
    $player.appendChild($progressbar);
    $player.appendChild($character);

    let $img = document.createElement('img');
    $img.src = img;
    $character.appendChild($img);

    let $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player);
   
};
createPlayer('player1', player1.name, player1.hp, player1.img);
createPlayer('player2', player2.name, player2.hp, player2.img);
