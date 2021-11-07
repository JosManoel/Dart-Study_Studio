// #################################################################
// COMPARTILHAR OS INPUTS DO FORMULARIO COM O BANNER E PREVIEW

let inputBanner = document.getElementById( 'inputBanner');
let inputTitle = document.getElementById('inputTitle');
let inputShield = document.getElementById('inputShield');

let previewBanner = document.getElementById('previewBanner');
let previewTitle = document.getElementById('previewTitle');
let previewShield = document.getElementById('previewShield');

let renderBanner = document.getElementById('renderBanner');
let renderTitle = document.getElementById('renderTitle');
let renderShield = document.getElementById('renderShield');


inputBanner.addEventListener('keyup', () => {
    renderBanner.innerHTML = previewBanner.innerHTML = inputBanner.value;
});

inputTitle.addEventListener('keyup', () => {
    renderTitle.innerHTML = previewTitle.innerHTML = inputTitle.value;
});

inputShield.addEventListener('keyup', () => {
    renderShield.innerHTML = previewShield.innerHTML = inputShield.value;
});

// ##################################################################
// BAIXAR ELEMENTO SELECIONADO
// o elemento e o nome sao passados no metodo onclick()

function downloadImage(element, nameImage = "image"){
    let image = document.querySelector(element);

    html2canvas(image, {
        backgroundColor: null
    }).then(canvas => {
        let a = document.createElement("a");

        a.href = canvas.toDataURL('image/png');
        a.download =  nameImage;
        a.click();
    });
}

// ##################################################################
// MODELAR O BANNER PREVIEW PROPORCIONALMENTE AO RENDER

function resizeBannerPreview(){
    let bannerPreview = document.querySelector('.preview-banner__background');
    $(bannerPreview).height(bannerPreview.clientWidth / 5);
}

// ###################################################################
// MUDANÇA DE TEMA

// SELECIONA O TEMA DE ACORDO COM RADIOBUTTOM

let darkDimmedSwitch = document.querySelector('#darkDimmed');
darkDimmedSwitch.addEventListener('click', () => {
    setThemeMode('dark-dimmed');
});

let defaultDarkSwitch = document.querySelector('#defaultDark');
defaultDarkSwitch.addEventListener('click', () => {
    setThemeMode('default-dark');   
});

let defaultLightSwitch = document.querySelector('#defaltLight');
defaultLightSwitch.addEventListener('click', () => {
   setThemeMode('default-light');
});


// MUDA O TEMA E SALVA NO LOCAL STORAGE
function setThemeMode(themeMode){
    let page = document.getElementsByTagName('html');

    $(page).removeClass();
    $(page).addClass(themeMode);

    localStorage.setItem('themeMode', themeMode);
}

// VERIFICA SE EXISTE UM TEMA INICIAL E ATIVA-O 
function getThemeMode(){
    const themeMode = localStorage.getItem('themeMode');
    setThemeMode(themeMode);

    switch (themeMode) {
        case 'default-light':
            defaultLightSwitch.checked = true;
            break;

        case 'default-dark':
            defaultDarkSwitch.checked = true;
            break;
        
        case 'dark-dimmed':
            darkDimmedSwitch.checked = true;
            break;
    }
}

// ###################################################################
// ABRE UMA IMAGEM E ADICIONA AO PREVIEW E AO RENDER, AO MESMO TEMPO
// QUE MUDA O TEXTO DO INPUT FILE CUSTOMIZADO.

$(function() {
    $('#upload').change(function(){
        let nameInput = document.querySelector("#uploadFileName");
        nameInput.textContent = this.value.slice(12);

        const file = $(this)[0].files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = function() {
            $("#previewImage").attr('src', fileReader.result);
            $("#renderImage").attr('src', fileReader.result);
        }

        fileReader.readAsDataURL(file);
    });
});

// ###################################################################











// ##################################################################



$(document).ready( () => {
    getThemeMode();
    resizeBannerPreview();
});