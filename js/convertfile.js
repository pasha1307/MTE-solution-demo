import {RE, ReplaceValsObj} from "./utils.js";

export const convertFile = (e) => {
    const txtInput = document.querySelector("#inputTxtArea");
    const txtOutput = document.querySelector("#outputTxtArea");
    const divOutput = document.querySelector("#outputDiv");
    const Terms = ReplaceValsObj;
    divOutput.innerHTML = txtInput.value.replace(RE, (matched) => {
        return `<b style="background-color: yellow">${Terms[matched]}</b>`
    });
    txtOutput.value = txtInput.value.replace(RE, 'XXXX');
}
