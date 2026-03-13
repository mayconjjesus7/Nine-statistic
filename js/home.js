// ===============================
// BUSCAR JOGOS DO ARQUIVO JSON
// ===============================

fetch("../data/jogos.json")

.then(response => response.json())

.then(jogos => {

const container = document.querySelector("#lista-jogos");
const detalhe = document.querySelector("#detalhe-jogo");

container.innerHTML = "";


// ===============================
// CRIAR LISTA DE JOGOS
// ===============================

jogos.forEach(jogo => {

const card = document.createElement("div");

card.classList.add("jogo-card");

card.innerHTML = `

<div class="linha-jogo">

<div class="hora">${jogo.hora || "--:--"}</div>

<div class="times">

<div class="team">
<img src="../assets/logos/${jogo.logoCasa}" class="logo">
<span>${jogo.timeCasa}</span>
</div>

<div class="team">
<img src="../assets/logos/${jogo.logoFora}" class="logo">
<span>${jogo.timeFora}</span>
</div>

</div>

</div>

`;


// ===============================
// CLICK NO JOGO → MOSTRAR DETALHE
// ===============================

card.addEventListener("click", () => {

document.querySelectorAll(".jogo-card").forEach(c => {
c.classList.remove("ativo");
});

card.classList.add("ativo");

detalhe.innerHTML = `

<h2>${jogo.timeCasa} x ${jogo.timeFora}</h2>

<div class="times-detalhe">

<div class="team">
<img src="../assets/logos/${jogo.logoCasa}" class="logo">
<span>${jogo.timeCasa}</span>
</div>

<span class="placar">vs</span>

<div class="team">
<img src="../assets/logos/${jogo.logoFora}" class="logo">
<span>${jogo.timeFora}</span>
</div>

</div>


<div class="probabilidades">

<h3>Probabilidades</h3>

<div class="prob-item">

<span>${jogo.timeCasa} ${jogo.probCasa}%</span>

<div class="barra">
<div class="barra-fill casa" style="width:${jogo.probCasa}%"></div>
</div>

</div>


<div class="prob-item">

<span>Empate ${jogo.probEmpate}%</span>

<div class="barra">
<div class="barra-fill empate" style="width:${jogo.probEmpate}%"></div>
</div>

</div>


<div class="prob-item">

<span>${jogo.timeFora} ${jogo.probFora}%</span>

<div class="barra">
<div class="barra-fill fora" style="width:${jogo.probFora}%"></div>
</div>

</div>

</div>


<div class="estatisticas">

<h3>Estatísticas</h3>

<p>⚽ Média de gols: ${jogo.mediaGols}</p>
<p>🚩 Média de escanteios: ${jogo.escanteios}</p>

</div>

`;

});

container.appendChild(card);

});

});