export const onFileRead = () => {
    const txtInput = document.querySelector("#inputTxtArea");
    const fileInput = document.querySelector("#uploadFile");
    let file = fileInput.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
        txtInput.value = reader.result;
    };
    reader.onerror = () => {
        console.log(reader.error);
    };
    return reader;
}
