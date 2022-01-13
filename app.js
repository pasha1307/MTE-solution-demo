import {onFileRead} from "./js/readfile.js";
import {convertFile} from "./js/convertfile.js";
import {downloadToFile} from "./js/exporttofile.js";
import {SampleTxt} from "./js/utils.js";

document.addEventListener('DOMContentLoaded', () => {
    const txtInput = document.querySelector("#inputTxtArea");
    const fileInput = document.getElementById("uploadFile");
    const btnInsert = document.getElementById("insertBtn");
    const btnConvert = document.getElementById("convertBtn");
    const btnExport = document.getElementById("exportBtn");
    const textToExport = document.querySelector('#outputTxtArea');
    fileInput.addEventListener('change', onFileRead, false);
    btnInsert.addEventListener('click', () => txtInput.value = SampleTxt);
    btnConvert.addEventListener('click', convertFile, false);
    btnExport.addEventListener('click', () => downloadToFile(textToExport.value, 'my-new-file.txt', 'text/plain'));
});