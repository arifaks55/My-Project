document.addEventListener('DOMContentLoaded', function () {
    // Elektrik Faturası Hesaplama Formu
    const electricityForm = document.getElementById('electricityForm');
    electricityForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const electricityUsage = parseFloat(document.getElementById('electricityUsage').value);

        // Örnek sabitler (gerçek verilere göre ayarlanmalıdır)
        const electricityRate = 0.15; // kWh başına ücret (örnek)
        const taxRate = 0.18; // Vergi oranı (örnek)
        const discountRate = 0.1; // İndirim oranı (örnek)

        // Hesaplamalar
        const subtotal = electricityUsage * electricityRate;
        const taxAmount = subtotal * taxRate;
        const discountAmount = subtotal * discountRate;
        const total = subtotal + taxAmount - discountAmount;

        // Sonuçları HTML olarak göster
        const resultHTML = `
            <p>Aylık elektrik tüketimi: ${electricityUsage.toFixed(2)} kWh</p>
            <p>Toplam fatura tutarı: ${subtotal.toFixed(2)} TL</p>
            <p>Vergi miktarı: ${taxAmount.toFixed(2)} TL</p>
            <p>İndirim tutarı: ${discountAmount.toFixed(2)} TL</p>
            <p>Ödemeniz gereken toplam miktar: ${total.toFixed(2)} TL</p>
        `;
        document.getElementById('electricityResult').innerHTML = resultHTML;
    });

    // Karbon Ayak İzi Hesaplama Formu
    const carbonForm = document.getElementById('carbonForm');
    carbonForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const carbonFootprint = parseFloat(document.getElementById('carbonFootprint').value);
        const result = carbonFootprint * 2.5; // Örnek: kg CO2 başına 2.5 TL (sadece örnek)
        document.getElementById('carbonResult').innerHTML = `<p>Ödemeniz gereken miktar: ${result.toFixed(2)} TL</p>`;
    });

    // Güneş Enerjisi Hesaplama Formu
    const solarForm = document.getElementById('solarForm');
    solarForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const solarPower = parseFloat(document.getElementById('solarPower').value);
        const result = solarPower * 5; // Örnek: kW başına 5 TL (sadece örnek)
        document.getElementById('solarResult').innerHTML = `<p>Yıllık tasarrufunuz: ${result.toFixed(2)} TL</p>`;
    });
});
