function showApartmentForm() {
    document.getElementById('apartment-form').style.display = 'block';
}

function closeApartmentForm() {
    document.getElementById('apartment-form').style.display = 'none';
}

function calculatePrice() {
    const districtPrices = {
        'Praha 1': 484,
        'Praha 2': 504,
        'Praha 3': 436,
        'Praha 4': 386,
        'Praha 5': 433,
        'Praha 6': 415,
        'Praha 7': 421,
        'Praha 8': 389,
        'Praha 9': 383,
        'Praha 10': 369,
    };

    const district = document.getElementById('district').value;
    const size = document.getElementById('size').value;
    const pricePerSquareMeter = districtPrices[district];

    if (size && pricePerSquareMeter) {
        const totalPrice = size * pricePerSquareMeter;
        const managementFee = totalPrice * 0.1;

        document.getElementById('result').innerHTML = `
            Nájem celkem: ${totalPrice} Kč<br>
            Cena správy: ${managementFee.toFixed(2)} Kč
        `;
    } else {
        document.getElementById('result').innerHTML = 'Vyplňte všechna pole!';
    }
}

