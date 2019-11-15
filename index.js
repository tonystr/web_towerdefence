/*
<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
    </head>
    <body>
        <div id='page'></div>
    </body>
</html>
*/

const enemies = [];
let wave = 0;
let waveEnemyCount = 16;
let money = 1000;
const storeTowers = [{
    name: 'peter\'s big tower'
}];
const towers = [];
let mouseState = 'playing';

setInterval(() => {
    for (enemy of enemies) {
        enemy.x += 1;
        enemy.div.style = `position:absolute;color:${enemy.color};left:${enemy.x}px;top:${enemy.y}px;`;
    }
}, 10);

setInterval(() => {
    if (waveEnemyCount > 0) {
        const page = document.getElementById('page');
        const output = page.getElementsByClassName('enemies')[0];
        console.log(output);
        console.log('new enemy!');

        const enemy = {
            x: 120,
            y: 12,
            div: null,
            color: '#ff8889'
        };

        const div = document.createElement('div');
        div.innerText = 'X';
        div.style = `position:absolute;color:${enemy.color};left:${enemy.x}px;top:${enemy.y}px;`;
        output.appendChild(div);

        enemy.div = div;
        enemies.push(enemy);

        waveEnemyCount--;
    }
}, 1500);

function buyTower(num) {
    if (money >= 400) {
        money -= 400;
    } else return;

    const page = document.getElementById('page');
    const tows = document.getElementsByClassName('towers')[0];

    const tower = {
        type: 'tower',
        num: num,
        div: document.createElement('div'),
        color: '#4ac45c'
    };
    tower.div.innerText = 'Tower';
    tower.div.classList.add('noselect');
    const mouseMove = e => {
        tower.div.style = `position:absolute;color:${tower.color};left:${e.clientX}px;top:${e.clientY}px;`;
    };
    const mouseUp = () => {
        document.removeEventListener('mousemove', mouseMove);
        document.removeEventListener('mouseup', mouseUp);
    };
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
    towers.push(tower);
    tows.appendChild(tower.div);

    mouseState = 'move tower';
    mouseTower = tower;
}
