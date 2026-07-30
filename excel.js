const input = document.getElementById("excelFile");

input.addEventListener("change", carregarArquivo);

function carregarArquivo(event){

    const arquivo = event.target.files[0];

    if(!arquivo) return;

    const reader = new FileReader();

    reader.onload = function(e){

        const data = new Uint8Array(e.target.result);

        const workbook = XLSX.read(data,{
            type:"array"
        });

        const primeiraPlanilha =
            workbook.SheetNames[0];

        const sheet =
            workbook.Sheets[primeiraPlanilha];

        const dados =
            XLSX.utils.sheet_to_json(sheet);

        processarDados(dados);

    };

    reader.readAsArrayBuffer(arquivo);

}