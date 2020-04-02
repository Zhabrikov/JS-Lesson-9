const CUR_BYR = 'http://www.nbrb.by/API/ExRates/Rates?Periodicity=0';



function getData(URL){
    fetch(URL)
    .then(response => {
        response.json()
        .then(data => {
            let bodyTable = document.getElementById('bodyTable');
            let usd_by = data[4].Cur_OfficialRate;
            let eur_by = data[5].Cur_OfficialRate;
            let rub_by = data[16].Cur_OfficialRate;
            let uah_by = data[2].Cur_OfficialRate;
            let pln_by = data[6].Cur_OfficialRate;
            
            bodyTable.innerHTML = `
            <tr>
                <td>Паритетбанк</td>                    
                    <td>${(usd_by).toFixed(4)}</td>
                    <td>${(eur_by).toFixed(4)}</td>
                    <td>${(rub_by).toFixed(4)}</td>
                    <td>${(uah_by).toFixed(4)}</td>
                    <td>${(pln_by).toFixed(4)}</td>                
                </tr>
            `;

            bodyTable.innerHTML += `
            <tr>
                <td>Альфа-Банк</td>                    
                    <td>${(usd_by + 0.1234).toFixed(4)}</td>
                    <td>${(eur_by + 0.1234).toFixed(4)}</td>
                    <td>${(rub_by + 0.1234).toFixed(4)}</td>
                    <td>${(uah_by + 0.1234).toFixed(4)}</td>
                    <td>${(pln_by + 0.1234).toFixed(4)}</td>                
                </tr>
            `;

            bodyTable.innerHTML += `
            <tr>
                <td>Беларусбанк</td>                    
                    <td>${(usd_by - 0.2314).toFixed(4)}</td>
                    <td>${(eur_by - 0.2314).toFixed(4)}</td>
                    <td>${(rub_by - 0.2314).toFixed(4)}</td>
                    <td>${(uah_by - 0.2314).toFixed(4)}</td>
                    <td>${(pln_by - 0.2314).toFixed(4)}</td>                
                </tr>
            `;

            bodyTable.innerHTML += `
            <tr>
                <td>Белагропромбанк</td>                    
                    <td>${(usd_by + 0.1786).toFixed(4)}</td>
                    <td>${(eur_by - 0.1786).toFixed(4)}</td>
                    <td>${(rub_by + 0.1786).toFixed(4)}</td>
                    <td>${(uah_by - 0.1786).toFixed(4)}</td>
                    <td>${(pln_by + 0.1786).toFixed(4)}</td>                
                </tr>
            `;

            bodyTable.innerHTML += `
            <tr>
                <td>МТБанк</td>                    
                    <td>${(usd_by + 0.1111).toFixed(4)}</td>
                    <td>${(eur_by - 0.1111).toFixed(4)}</td>
                    <td>${(rub_by + 0.1111).toFixed(4)}</td>
                    <td>${(uah_by - 0.1111).toFixed(4)}</td>
                    <td>${(pln_by + 0.1111).toFixed(4)}</td>                
                </tr>
            `;

          
        })
        .catch(() => {
            console.log('Извените данные недоступны');
        })
    })
};

getData(CUR_BYR);


convert = () => {
    fetch(CUR_BYR)
    .then(response => {
        response.json()
        .then(data => {
            let usd_by = data[4].Cur_OfficialRate;
            let eur_by = data[5].Cur_OfficialRate;
            let rub_by = data[16].Cur_OfficialRate;
            let oneInput = document.getElementById('oneInput');
            let twoInput = document.getElementById('twoInput');
            let optionOneClick = document.getElementById('one').value;
            switch(optionOneClick){
                case 'BYN':
                    twoInput.value = oneInput.value;
                    break;
                case 'USD':
                    twoInput.value = (oneInput.value * usd_by).toFixed(4);
                    break;
                case 'EUR':
                    twoInput.value = (oneInput.value * eur_by).toFixed(4);
                    break;
                case 'RUB':
                    twoInput.value = (oneInput.value * rub_by).toFixed(4);
                    break;
            
            }


        })
        .catch(() => {
            console.log('Извените данные недоступны');
        })
    })
}

document.getElementById('one').addEventListener('change', convert);

document.getElementById('oneInput').addEventListener('input', convert);

