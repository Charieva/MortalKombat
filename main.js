let $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

let player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['sword', 'kunai', 'magic'],
    attack: function(name) {
        console.log(name + ' ' + 'Fight...');
    }
};

let player2 = {
    player: 2,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon:  ['sword', 'kunai', 'magic'],
    attack: function(name) {
        console.log(name + ' ' + 'Fight...');
    }
};

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
};

function createPlayer(playerObj) {
    let $player = createElement('div', 'player' + playerObj.player);
    let $progressbar = createElement('div', 'progressbar');
    let $character = createElement('div', 'character');
    let $life = createElement('div', 'life');
    let $name = createElement('div', 'name');
    let $img = createElement('img');

    $life.style.width = playerObj.hp + '%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $progressbar.appendChild($name);
    $progressbar.appendChild($life);
    
    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);
    
    return $player;
};

function changeHP(player) {
    const $playerLife = document.querySelector(' .player'+ player.player +' .life');
    player.hp = Math.ceil(Math.random() * 10);
    $playerLife.style.width = player.hp + '%';

    if (player.hp < 0) {
        $arenas.appendChild(playerLose(player.name));
    } else {
        $arenas.appendChild(playerWins(player.name));
    } 
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' lose';

    return $loseTitle;
}
function playerWins(name) {
    const $winsTitle = createElement('div', 'winsTitle');
    $winsTitle.innerText = name + ' wins';

    return $winsTitle;
}

$randomButton.addEventListener('click', function() {

    console.log('####: Click Random Button');
    changeHP(player1);
    changeHP(player2);
    console.log(changeHP);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
