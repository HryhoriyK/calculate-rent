function showHouseForm() {
    document.getElementById('house-form').style.display = 'block';
}

function closeHouseForm() {
    document.getElementById('house-form').style.display = 'none';
}

function calculateHouseManagementPrice() {
    const usableArea = document.getElementById('usable-area').value;
    const residentialUnits = document.getElementById('residential-units').value;
    const nonResidentialUnits = document.getElementById('nonresidential-units').value;

    if (usableArea) {
        const managementPrice = (usableArea * 5) + ((usableArea * 300) * 0.036);

        document.getElementById('result-house').innerHTML = `
            <strong>Maximální cena správy bytového domu:</strong> ${managementPrice.toFixed(2)} Kč
        `;
    } else {
        document.getElementById('result-house').innerHTML = 'Vyplňte užitnou plochu domu!';
    }
}