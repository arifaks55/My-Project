document.getElementById('solarForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const panelVerim = parseFloat(document.getElementById('panelVerim').value);
  const panelAlani = parseFloat(document.getElementById('panelAlani').value);
  const gunlukGunesSaat = parseFloat(document.getElementById('gunlukGunesSaat').value);

  if (isNaN(panelVerim) || isNaN(panelAlani) || isNaN(gunlukGunesSaat)) {
    alert('Lütfen tüm alanları doğru bir şekilde doldurun.');
    return;
  }

  const enerjiUretimi = (panelVerim / 100) * panelAlani * gunlukGunesSaat;

  const resultContainer = document.getElementById('resultContainer');
  resultContainer.innerHTML = `
      <div class="alert alert-success" role="alert">
        Günlük enerji üretimi: ${enerjiUretimi.toFixed(2)} kWh
      </div>
    `;
});

// Örnek veriler (gerçek veri veya API'den alınabilir)
const data = {
  labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'],
  datasets: [{
    label: 'Güneş Enerjisi Üretimi (kWh)',
    data: [1500, 1800, 2200, 2000, 2500, 2800],
    backgroundColor: 'rgba(255, 206, 86, 0.2)',
    borderColor: 'rgba(255, 206, 86, 1)',
    borderWidth: 1
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

var myChart = new Chart(
  document.getElementById('myChart'),
  config
);

const energyTips = [
  "Güneş panellerinizin etkinliğini artırmak için düzenli olarak temizlediğinizden emin olun.",
  "Enerji tasarrufu ampullerini kullanarak evinizdeki aydınlatma maliyetlerini azaltın.",
  "Elektronik cihazlarınızı fişten çekerek bekleme modundaki enerji tüketimini azaltın."
];

const energyTipsContainer = document.getElementById('energyTips');
energyTips.forEach(tip => {
  const tipElement = document.createElement('div');
  tipElement.classList.add('tip');
  tipElement.textContent = tip;
  energyTipsContainer.appendChild(tipElement);
});