
var biblioteca = ["ABACATE", "ABACAXI", "ABIU", "ABRUNHO", "ABUTUA", "AÇAÍ", "ACEROLA", "ACHACHAIRU", "ACHUÁ", "AGUAÍ", "AJURU", "AKEE", "AMEIXA", "AMÊNDOA", "AMORA", "ANTIDESMA", "APIRANGA", "ARAÇÁ", "ARICURI", "ARIRI", "ATEMOIA", "AVELÃ", "AVOCADO", "BABACO", "BABAÇU", "BACABA", "BACURI", "BACURIPARI", "BALATA", "BANANA", "BARU", "BILIMBI", "BIRIBÁ", "BURANHÉM", "BURITI", "BUTIÁ", "CABELUDINHA", "CACAU", "CAFEZINHO", "CAGAITA", "CAINITO", "CAJÁ", "CAJU", "CALABAÇA", "CALABURA", "CALAMONDIN", "CAMBUCÁ", "CAMBUCI", "CAMUTIM", "CANISTEL", "CAQUI", "CARAMBOLA", "CARAMURI", "CARISSA", "CEREJA", "CHAMPEDAKE", "CHERIMOIA", "CIRIGUELA", "COCO", "CONDESSA", "CRANBERRY", "CRUÁ", "CUBIU", "CUPUAÇU", "CURUBA", "CUTITE", "DAMASCO", "DENDÊ", "DURIAN", "ESFREGADINHA", "FEIJOA", "FIGO", "FRAMBOESA", "GLYCOSMIS", "GOIABA", "GRANADILHA", "GRAVIOLA", "GROSELHA", "GRUMIXAMA", "GUABIJU", "GUABIROBA", "GUAÇATUNGA", "GUACHAMACA", "GUAGILOTE", "GUAMIRIM", "GUARANÁ", "HEISTÉRIA", "IMBÉ", "INAJÁ", "JABUTICABA", "JACA", "JAMBO", "JAMBOLÃO", "JARACATIÁ", "JATOBÁ", "JUÁ", "JUJUBA", "KINO", "KUMQUAT", "LACUCHA", "LANDIN", "LARANJA", "LICHIA", "LOBEIRA", "LONGAN", "LUCUMA", "LULO", "MABOLO", "MAÇÃ", "MACADÂMIA", "MAMÃO", "MAMEY", "MANGA", "MANGABA", "MANGOSTÃO", "MARACUJÁ", "MARMELO", "MAROLO", "MELANCIA", "MELÃO", "MIRTILO", "MORANGO", "MURICI", "MURUMURU", "NARANJILLA", "NECTARINA", "NÊSPERA", "NONI", "ORANGELO", "PAJURÁ", "PATAUÁ", "PEQUI", "PERA", "PÊSSEGO", "PHYSALIS", "PINDAÍVA", "PINHA", "PINHÃO", "PISTÁCHIO", "PITAIA", "PITANGATUBA", "PIXIRICA", "POMELO", "PUÇÁ", "PULASAN", "PUPUNHA", "RAMBAI", "RAMBUTÃO", "RANDIA", "ROMÃ", "RUKAM", "SACHAMANGO", "SAGUARAJI", "SALAK", "SANTOL", "SAPOTI", "SAPUCAIA", "SAPUTÁ", "SORVA", "TAIUVA", "TÂMARA", "TAMARINDO", "TANGERINA", "TANGOR", "TAPEREBÁ", "TAPIÁ", "TARUMÃ", "TATAJUBA", "TORANJA", "TOTAI", "TUCUJÁ", "TUCUM", "TUCUMÃ", "UARÁ", "UBUÇU", "UCHUVA", "UMBU", "UMBUGUELA", "UMÊ", "UVA", "UVAIA", "UXI", "WAMPI", "XIXÁ"];
var element;

var quantidadePalavra = biblioteca.length - 1;
console.log(quantidadePalavra);

var posicaoAleatoria = Math.round(Math.random() * quantidadePalavra);

var selecionarPalavra = biblioteca[posicaoAleatoria];

var tamanhoPalavraSorteada = selecionarPalavra.length;
var palavraAlterada;
var arrayErros = [];
var erros;
var acertos;
var stringLetras = "";
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));


window.addEventListener("keyup", myEventHandler, false);

function myEventHandler(e) {
	debugger
	var keyCode = e.keyCode;
	validate();
    if (keyCode == 13) {
		let valor = document.getElementById("checkPalavra").value;
		if(!!valor) play(valor);
    }
};

function validate() {
	var element = document.getElementById('checkPalavra');
	element.value = element.value.replace(/[^a-zA-Z0-9@]+/, '');
  };


function play(letraParametro) {
	if (letraParametro == null) alert("Digite ao menos uma palavra! ");

	else {
		palavraAlterada = selecionarPalavra;
		letraParametro = letraParametro.toUpperCase();
		
		if (palavraAlterada.match(letraParametro)) {
			let verificacao =stringLetras.match(letraParametro)!=null;
			stringLetras = stringLetras.concat(letraParametro);
			if(!verificacao){
				while (palavraAlterada.match(letraParametro) != null) {
					var posicao = palavraAlterada.search(letraParametro);
					document.getElementById("letra" + posicao).value = letraParametro;
					palavraAlterada = palavraAlterada.replace(letraParametro, '0');
					palavraAlterada.match(letraParametro);
					acertos++;
					if(acertos == tamanhoPalavraSorteada){
						fim( "Você ganhou! Parabéns =)");
					}
				}
			}else{
				mensagem("Letra já escolhida -.-' ");
			}

			
		} else {
			erros++;
			if (erros <= 8) {
				arrayErros.push(letraParametro);
				document.getElementById("letrasDigitadas").innerHTML = "Letras Digitadas Erradas:" + arrayErros;
				exibeBoneco();
			}
		}
	}

	checkPalavra.focus();
	document.getElementById("checkPalavra").value = null;
};

function resposta() {
	alert(selecionarPalavra);
};

function defineLetras(valor) {
	for (let index = 0; index < 20; index++) {
		document.getElementById("letra" + index).value = "";
		document.getElementById("letra" + index).style.display = "none";
	};
	for (let index = 0; index < valor; index++) {
		document.getElementById("letra" + index).style.display = "inline";
	}

}

function init() {
	limparBoneco();
	limparMensagem();
	erros = 0;
	acertos = 0;
	stringLetras = "";
	arrayErros = [];
	Palavra = document.getElementById("checkPalavra");
	Palavra.value = null;
	document.getElementById("letrasDigitadas").innerHTML = "Letras Digitadas Erradas:" + arrayErros;
	posicaoAleatoria = Math.round(Math.random() * quantidadePalavra);
	selecionarPalavra = biblioteca[posicaoAleatoria];
	tamanhoPalavraSorteada = selecionarPalavra.length;
	defineLetras(tamanhoPalavraSorteada);
	exibeBoneco();
};

function limparBoneco() {
	$('.cabeca').css('display', 'none');
	$('.corpo').css('display', 'none');
	$('.braco-direito').css('display', 'none');
	$('.braco-esquerdo').css('display', 'none');
	$('.perna-direita').css('display', 'none');

	$('.cabeca').css('animation-duration', 'none');
		$('.cabeca').css('animation-name', 'none');
		$('.cabeca').css('animation-iteration-count', 'none');
		$('.cabeca').css('animation-direction', 'none');

		$('.braco-direito').css('animation-duration', 'none');
		$('.braco-direito').css('animation-name', 'none');
		$('.braco-direito').css('animation-iteration-count', 'none');
		$('.braco-direito').css('animation-direction', 'none');
		$('.braco-esquerdo').css('animation-duration', 'none');
		$('.braco-esquerdo').css('animation-name', 'none');
		$('.braco-esquerdo').css('animation-iteration-count', 'none');
		$('.braco-esquerdo').css('animation-direction', 'none');

		$('.perna-direita').css('animation-duration', 'none');
		$('.perna-direita').css('animation-name', 'none');
		$('.perna-direita').css('animation-iteration-count', 'none');
		$('.perna-direita').css('animation-direction', 'none');

		$('.perna-esquerda').css('animation-duration', 'none');
		$('.perna-esquerda').css('animation-name', 'none');
		$('.perna-esquerda').css('animation-iteration-count', 'none');
		$('.perna-esquerda').css('animation-direction', 'none');
};

var exibeBoneco = function () {

	if (erros === 0) {
		erros = 0;
	} else if (erros === 1) {
		document.getElementById("cabeca").style.display = "block";
		// $('.cabeca').css('display', 'block');
	} else if (erros === 2) {
		document.getElementById("corpo").style.display = "block";

		// $('.corpo').css('display', 'block');
	} else if (erros === 3) {
		document.getElementById("braco-direito").style.display = "block";

		// $('.braco-direito').css('display', 'block');
	} else if (erros === 4) {
		document.getElementById("braco-esquerdo").style.display = "block";

		// $('.braco-esquerdo').css('display', 'block');
	} else if (erros === 5) {
		document.getElementById("perna-direita").style.display = "block";

		// $('.perna-direita').css('display', 'block');
	} else if (erros === 6) {
		document.getElementById("perna-esquerda").style.display = "block";

		// $('.perna-esquerda').css('display', 'block');
	} else {
		
		$('.cabeca').css('animation-duration', '1s');
		$('.cabeca').css('animation-name', 'ficarRoxo');
		$('.cabeca').css('animation-iteration-count', 'infinite');
		$('.cabeca').css('animation-direction', 'alternate');

		$('.braco-direito').css('animation-duration', '0.3s');
		$('.braco-direito').css('animation-name', 'debaterBracoDireito');
		$('.braco-direito').css('animation-iteration-count', 'infinite');
		$('.braco-direito').css('animation-direction', 'alternate');
		$('.braco-esquerdo').css('animation-duration', '0.3s');
		$('.braco-esquerdo').css('animation-name', 'debaterBracoEsquerdo');
		$('.braco-esquerdo').css('animation-iteration-count', 'infinite');
		$('.braco-esquerdo').css('animation-direction', 'alternate');

		$('.perna-direita').css('animation-duration', '0.3s');
		$('.perna-direita').css('animation-name', 'debaterPernaDireita');
		$('.perna-direita').css('animation-iteration-count', 'infinite');
		$('.perna-direita').css('animation-direction', 'alternate');

		$('.perna-esquerda').css('animation-duration', '0.3s');
		$('.perna-esquerda').css('animation-name', 'debaterPernaEsquerda');
		$('.perna-esquerda').css('animation-iteration-count', 'infinite');
		$('.perna-esquerda').css('animation-direction', 'alternate');

		fim("Voce perdeu! A resposta correta era : " + selecionarPalavra + ", mais sorte na próxima! :)")

		
	}
};

async function fim(msg){
	mensagem(msg);
	await delay(3000);
		init();
	};

async function mensagem(msg){
	document.getElementById("msg").innerText = msg;
	await delay(3000);
	limparMensagem();
};
function limparMensagem(){
	document.getElementById("msg").innerText = "";
};

