const html = document.getElementsByTagName('html')[0];

const previewBanner = document.getElementById('previewBanner');
const previewShield = document.getElementById('previewShield');
const previewTextWrapper = document.getElementById('previewTextWrapper');

const renderBanner = document.getElementById('renderBanner');
const renderShield = document.getElementById('renderShield');
const renderTextWrapper = document.getElementById('renderTextWrapper');

const inputBanner = document.getElementById( 'inputBanner');
const inputBannerCount = document.getElementById( 'inputBannerCount');
const inputShield = document.getElementById('inputShield');
const inputShieldCount = document.getElementById('inputShieldCount');
const inputPrimaryColor = document.getElementById('inputPrimaryColor');
const inputSecondaryColor = document.getElementById('inputSecondaryColor');
const inputTextBannerColor = document.getElementById('inputTextBannerColor');

const primaryColorPicker = document.getElementById('primaryColorPicker');
const secondaryColorPicker = document.getElementById('secondaryColorPicker');
const textBannerColorPicker = document.getElementById('textBannerColorPicker');


// # Tratamento de inputs de texto

inputBanner.addEventListener('keyup', () => {
    renderBanner.innerHTML = previewBanner.innerHTML = inputBanner.value;
    inputBannerCount.innerHTML = $(inputBanner).val().length.toString() + "/64";

    resizeTextBanner(previewBanner, inputBanner, 18, previewTextWrapper);
    resizeTextBanner(renderBanner, inputBanner, 44, renderTextWrapper);
});

inputShield.addEventListener('keyup', () => {
    renderShield.innerHTML = previewShield.innerHTML = inputShield.value;
    inputShieldCount.innerHTML = $(inputShield).val().length.toString() + "/32";
});

// # Redimensionando o preview para a proporção correta

function resizeBannerPreview(){
    let bannerPreview = document.querySelector('.preview-banner__background');
    $(bannerPreview).height(bannerPreview.clientWidth / 5);
}

// # Redimensionamento automatico do texto no banner 

function resizeTextBanner(text, inputText, minSize, wrapper){
    var textLenght = $(inputText).val().length;
    var wrapperWidth = parseInt($(wrapper).css('width').replace("px",""));
    var wrapperHeight = parseInt($(wrapper).css('height').replace("px",""));
    
    var fontSize = (wrapperWidth * Math.sqrt(2))/textLenght;
    
    if (fontSize >= wrapperHeight/ (Math.sqrt(2))) {
        text.style.fontSize = maxTextSize(wrapperHeight);
    } else if (fontSize < minSize){
        text.style.fontSize = minTextSize(minSize);
    }else{
        text.style.fontSize = (fontSize).toString() + "px";
    }
}

function maxTextSize(wrapperHeight){
    return (wrapperHeight * 0.75).toString() + "px";
}

function minTextSize(minSize){
    return ((minSize).toString() + "px");
}

// # Adicionando uma imagem ao banner

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

// # Configuração de cores do banner

function setColorValue(string, colorValue, inputColor){
    html.style.setProperty(string, $(colorValue).val());
    inputColor.value = $(colorValue).val().replace("#","");
}

function changeColor(element, colorValue){
    html.style.setProperty(element, "#" + colorValue);
}

// cor primaria

$(primaryColorPicker).on('change', function () {  
    setColorValue("--banner-primary-color", this, inputPrimaryColor);
});
$(inputPrimaryColor).on('keypress', function(e){
    if(e.key === 'Enter'){
        changeColor("--banner-primary-color", inputPrimaryColor.value);
    }
});

// cor secundaria

$(secondaryColorPicker).on('change', function () {  
    setColorValue("--banner-secondary-color", this, inputSecondaryColor);
});
$(inputSecondaryColor).on('keypress', function(e){
    if(e.key === "Enter"){
        changeColor("--banner-secondary-color", inputSecondaryColor.value);
    }
});

// cor do texto

$(textBannerColorPicker).on('change', function () {
    setColorValue("--color-banner-text", this, inputTextBannerColor);
});
$(inputTextBannerColor).on('keypress', function(e){
    if(e.key === "Enter"){
        changeColor("--color-banner-text", inputTextBannerColor.value);
    }
});

// input de cor hexadecimal

$(document).on('click', function(e) {
    if(!inputPrimaryColor.contains(e.target) && (inputPrimaryColor.value != "")){
        changeColor("--banner-primary-color", inputPrimaryColor.value);
    }
    
    if(!inputSecondaryColor.contains(e.target) && (inputSecondaryColor.value != "")){
        changeColor("--banner-secondary-color", inputSecondaryColor.value);
    }

    if(!inputTextBannerColor.contains(e.target) && (inputTextBannerColor.value != "")){
        changeColor("--color-banner-text", inputTextBannerColor.value);
    }
});

// # Download da imagem gerada

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


// # Seleção de temas

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

// armazenamento do estado de tema atual

function setThemeMode(themeMode){
    let page = document.getElementsByTagName('html');

    $(page).removeClass();
    $(page).addClass(themeMode);

    localStorage.setItem('themeMode', themeMode);
}

// recuperando o estado de tema anterior

function getThemeMode(){
    const themeMode = localStorage.getItem('themeMode');
    var theme = themeMode != null ? themeMode : 'dark-dimmed';

    setThemeMode(theme);

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

// # Funções iniciais

$(document).ready( () => {
    getThemeMode();
    resizeBannerPreview();
});