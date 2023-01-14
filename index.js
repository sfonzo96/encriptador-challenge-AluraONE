const inputArea = document.getElementById('inputArea');
const outputArea = document.getElementById('outputArea');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const copyBtn = document.getElementById('copyBtn');
const noMessagePlaceholder = document.getElementById('noMessagePlaceholder');

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    Swal.fire({
        title: 'Copied!',
        text: 'The text has been copied to your clipboard',
        icon: 'success',
        background:' #F2F3F4',
        color: '#002535',
        confirmButtonColor: '#003851',
    }

    );
}

function missingInput() {
    Swal.fire({
        title: 'Oops...',
        text: 'Asegúrate de que no haber dejado el campo vacío o confirma primero',
        icon: 'warning',
        background:' #F2F3F4',
        color: '#002535',
        confirmButtonColor: '#003851',
    })
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function showOutput() {
    if (!noMessagePlaceholder.classList.contains('hidden')) { //Esto es: si ya se usó al menos una vez la app
        noMessagePlaceholder.classList.toggle('hidden');
        outputArea.classList.toggle('hidden');
    }
}

function getInput() {
    return inputArea.value;
}

function setOutput(output){
    outputArea.value = output;
}

function encryptAlgorithm(input) {
    //Reemplazo de vocales
    const vocalsOutput = input.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat');
    const accentedVocalsOutput = vocalsOutput.replaceAll('é', 'énter').replaceAll('í', 'ímes').replaceAll('á', 'ái').replaceAll('ó', 'óber').replaceAll('ú', 'úfat');
    const UpperVocalsOutput = accentedVocalsOutput.replaceAll('E', 'Enter').replaceAll('I', 'Imes').replaceAll('A', 'Ai').replaceAll('O', 'Ober').replaceAll('U', 'Ufat');
    const UpperAccentedVocalsOutput = UpperVocalsOutput.replaceAll('É', 'Énter').replaceAll('Í', 'Ímes').replaceAll('Á', 'Ái').replaceAll('Ó', 'Óber').replaceAll('Ú', 'Úfat');
    

    //Detalles ortográficos
    const uppercaseVocalsOutput = UpperAccentedVocalsOutput.replaceAll('. e', '. E').replaceAll('. i', '. I').replaceAll('. a', '. A').replaceAll('. o', '. O').replaceAll('. u', '. U');
    const uppercaseAccentedVocalsOutput = uppercaseVocalsOutput.replaceAll('. é', '. É').replaceAll('. í', '. Í').replaceAll('. a', '. Á').replaceAll('. ó', '. Ó').replaceAll('. ú', '. Ú');
    const finalOutput = capitalizeFirstLetter(uppercaseAccentedVocalsOutput);

    return finalOutput;
}

function decryptAlgorithm(input) {
    //Reemplazo inverso de vocales
    const vocalsInvOutput = input.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');
    const accentedVocalsInvOutput = vocalsInvOutput.replaceAll('énter', 'é').replaceAll('ímes', 'í').replaceAll('ái', 'á').replaceAll('óber', 'ó').replaceAll('úfat', 'ú');
    const upperVocalsInvOutput = accentedVocalsInvOutput.replaceAll('Enter', 'E').replaceAll('Imes', 'I').replaceAll('Ai', 'A').replaceAll('Ober', 'O').replaceAll('Ufat', 'U');
    const upperAccentedVocalsInvOutput = upperVocalsInvOutput.replaceAll('Énter', 'É').replaceAll('Ímes', 'Í').replaceAll('Ái', 'Á').replaceAll('Óber', 'Ó').replaceAll('Úfat', 'Ú');

    //Detalles ortográficos
    const uppercaseVocalsOutput = upperAccentedVocalsInvOutput.replaceAll('. e', '. E').replaceAll('. i', '. I').replaceAll('. a', '. A').replaceAll('. o', '. O').replaceAll('. u', '. U');
    const uppercaseAccentedVocalsOutput = uppercaseVocalsOutput.replaceAll('. é', '. É').replaceAll('. í', '. Í').replaceAll('. á', '. Á').replaceAll('. ó', '. Ó').replaceAll('. ú', '. Ú');
    const finalOutput = capitalizeFirstLetter(uppercaseAccentedVocalsOutput);

    return finalOutput;
}

function encrypt() {
    const input = getInput();
    if (input.length > 0) {
        const output = encryptAlgorithm(input);
        showOutput();
        setOutput(output);
    } else {
        missingInput();
    }
}

function decrypt() {
    const input = getInput();
    if (input.length > 0) {
        const output = decryptAlgorithm(input);
        showOutput();
        setOutput(output);
    } else {
        missingInput();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    encryptBtn.addEventListener('click', encrypt);
    decryptBtn.addEventListener('click', decrypt);
    copyBtn.addEventListener('click', () => {
        const output = outputArea.value;
        if (output.length > 0) {
            copyToClipboard(output);
        } else {
            missingInput();
        }
    })
})