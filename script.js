
let oyuncu1 = document.getElementById('player1');
let oyuncu2 = document.getElementById('player2');
let oyuncu3 = document.getElementById('player3');
let oyuncu4 = document.getElementById('player4');
let tablePlayers = document.getElementById('table-players');
let tablePlayersScor = document.getElementById('table-players-scor');
let container = document.getElementById('container');
let inputNumber = document.getElementById('input-number');
let input = document.getElementById('input');

document.getElementById("save-user").addEventListener('click', function () {

    let th = `    
    <th class="oyuncu1">${oyuncu1.value}</th>
    <th class="oyuncu2">${oyuncu2.value}</th>
    <th class="oyuncu3">${oyuncu3.value}</th>
    <th class="oyuncu4">${oyuncu4.value}</th>
    `
    if (oyuncu1.value == "") {
        alert("lütfen 1. oyuncuyu giriniz");
        return;
    } else if (oyuncu2.value == "") {
        alert("lütfen 2. oyuncuyu giriniz");
        return;
    } else if (oyuncu3.value == "") {
        alert("lütfen 3. oyuncuyu giriniz");
        return;
    } else if (oyuncu4.value == "") {
        alert("lütfen 4. oyuncuyu giriniz");
        return;
    } else if (input.value == "") {
        alert("lütfen kaç el oynayacaksanız seçiniz!!!");
        return;
    }

    const tr = document.createElement('tr');
    tablePlayers.appendChild(tr);


    let playerNumbers = input.value;
    console.log("oyun sayısı: " + playerNumbers);

    //oyuncu puanları

    for (let i = 0; i < playerNumbers; i++) {

        let ta = `          
        <th class="oyuncu1"><input id="textbox1-${i}" type="number"></th>
        <th class="oyuncu2"><input id="textbox2-${i}" type="number"></th>
        <th class="oyuncu3"><input id="textbox3-${i}" type="number"></th>
        <th class="oyuncu4"><input id="textbox4-${i}" type="number"> </th>        
        <th><input id="checkbox-${i}" type="checkbox" onclick="check(${i})"></th>              
        `

        const te = document.createElement('tr');
        tablePlayersScor.appendChild(te);
        te.innerHTML = ta;

    }

    tr.innerHTML = th;
    container.innerHTML = "";

    //Total scor

    let playerTotal = `
    <td class="player-scor1"><input type="text"  id="player-scor1" value="0" disabled></td>
    <td class="player-scor2"><input type="text"  id="player-scor2" value="0" disabled></td>
    <td class="player-scor3"><input type="text"  id="player-scor3" value="0" disabled></td>
    <td class="player-scor4"><input type="text"  id="player-scor4" value="0" disabled></td>
    
    `;
    let top = document.createElement("tr");
    top.innerHTML = playerTotal;
    tablePlayersScor.appendChild(top);


});

function check(id) {
    const textbox1 = document.getElementById(`textbox1-${id}`);
    const textbox2 = document.getElementById(`textbox2-${id}`);
    const textbox3 = document.getElementById(`textbox3-${id}`);
    const textbox4 = document.getElementById(`textbox4-${id}`);
    const checkbox = document.getElementById(`checkbox-${id}`);
    if (textbox1.value == "") {
        alert("lütfen " + oyuncu1.value + "'in puanını giriniz.");
        checkbox.checked = false;
        return;
    } else if (textbox2.value == "") {
        alert("lütfen " + oyuncu2.value + "'in puanını giriniz.");
        checkbox.checked = false;
        return;
    } else if (textbox3.value == "") {
        alert("lütfen " + oyuncu3.value + "'in puanını giriniz.");
        checkbox.checked = false;
        return;
    } else if (textbox4.value == "") {
        alert("lütfen " + oyuncu4.value + "'in puanını giriniz.");
        checkbox.checked = false;
        return;
    }
    checkbox.checked = true;
    textbox1.disabled = true;
    textbox2.disabled = true;
    textbox3.disabled = true;
    textbox4.disabled = true;

    total();

    //Total scor

    function total() {
        const totalTextBox1 = Number(textbox1.value);
        const totalTextBox2 = textbox2.value;
        const totalTextBox3 = textbox3.value;
        const totalTextBox4 = textbox4.value;

        document.getElementById('player-scor1').value = parseInt(totalTextBox1) + parseInt(totalTextBox1);
        document.getElementById('player-scor2').value = parseInt(totalTextBox2);
        document.getElementById('player-scor3').value = parseInt(totalTextBox3);
        document.getElementById('player-scor4').value = parseInt(totalTextBox4);

        console.log(totalTextBox1);
        console.log(totalTextBox2);
        console.log(totalTextBox3);
        console.log(totalTextBox4);


    }
}





calculate = function (a, p, t) {
    var amount = document.getElementById(a).value;
    var price = document.getElementById(p).value;
    document.getElementById(t).value = parseInt(amount) * parseInt(price);
}