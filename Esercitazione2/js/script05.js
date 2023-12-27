function estraiEstensione() {
    let inputFile = document.getElementById('inputFile');

    if (inputFile.files.length > 0) {
        let nomeFile = inputFile.files[0].name;

        let posizionePunto = nomeFile.lastIndexOf('.');
        
        if (posizionePunto !== -1) {
            let estensione = nomeFile.slice(posizionePunto + 1);
            console.log('Estensione del file: ' + estensione);
            document.getElementById('risultato').innerHTML = `Estensione del file: ${estensione}`;
        } else {
            console.log('Il file non ha un\'estensione.');
            document.getElementById('risultato').innerHTML = `Il file non ha un\'estensione.`;

        }
    } else {
        console.log('Nessun file selezionato.');
        document.getElementById('risultato').innerHTML = `Nessun file selezionato.`;

    }


    
}