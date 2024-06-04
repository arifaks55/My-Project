var charactersData = {
    "characters": [
        {
            "id": 1,
            "name": "Luke Skywalker",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
            "homeworld": "tatooine"
        },
        {
            "id": 2,
            "name": "C-3PO",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
            "homeworld": "tatooine"
        },
        {
            "id": 3,
            "name": "R2-D2",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
            "homeworld": "naboo"
        },
        {
            "id": 4,
            "name": "Darth Vader",
            "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
            "homeworld": "tatooine"
        },
        {
            "id": 5,
            "name": "Leia Organa",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
            "homeworld": "alderaan"
        },
        {
            "id": 6,
            "name": "Owen Lars",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
            "homeworld": "tatooine"
        },
        {
            "id": 7,
            "name": "Beru Whitesun lars",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
            "homeworld": "tatooine"
        },
        {
            "id": 8,
            "name": "R5-D4",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
            "homeworld": "tatooine"
        },
        {
            "id": 9,
            "name": "Biggs Darklighter",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
            "homeworld": "tatooine"
        },
        {
            "id": 10,
            "name": "Obi-Wan Kenobi",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
            "homeworld": "stewjon"
        },
        {
            "id": 11,
            "name": "Anakin Skywalker",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
            "homeworld": "tatooine"
        },
        {
            "id": 12,
            "name": "Wilhuff Tarkin",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
            "homeworld": "eriadu"
        },
        {
            "id": 13,
            "name": "Chewbacca",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
            "homeworld": "kashyyyk"
        },
        {
            "id": 14,
            "name": "Han Solo",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
            "homeworld": "corellia"
        },
        {
            "id": 15,
            "name": "Greedo",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
            "homeworld": "Rodia"
        },
        {
            "id": 16,
            "name": "Jabba Desilijic Tiure",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
            "homeworld": "tatooine"
        },
        {
            "id": 18,
            "name": "Wedge Antilles",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
            "homeworld": "corellia"
        },
        {
            "id": 19,
            "name": "Jek Tono Porkins",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
            "homeworld": "bestine"
        },
        {
            "id": 20,
            "name": "Yoda",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"
        },
        {
            "id": 21,
            "name": "Palpatine",
            "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
            "homeworld": "naboo"
        }
    ]
};

// Karakterleri göstermek için renderCharacters fonksiyonu
function renderCharacters() {
    // Kartları göstereceğimiz div
    var characterContainer = document.createElement("div");
    characterContainer.classList.add("row");

    // Veri setindeki her karakter için bir kart oluştur
    charactersData.characters.forEach(character => {
        var characterCard = `
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
            <img class="card-img-top" src="${character.pic}" alt="${character.name}">
            <div class="card-body">
              <h5 class="card-title">${character.name}</h5>
              <p class="card-text">Homeworld: ${character.homeworld}</p>
            </div>
          </div>
        </div>
      `;
        characterContainer.innerHTML += characterCard;
    });

    // Oluşturulan kartları HTML'e ekle
    document.getElementById("characterCards").appendChild(characterContainer);

    // Butonun yazısını ve fonksiyonunu değiştir
    var showButton = document.getElementById("showButton");
    showButton.innerHTML = "Karakterleri Gizle";
    showButton.classList.remove("btn-primary");
    showButton.classList.add("btn-danger");
    showButton.onclick = removeCharacters;
}

// Karakterleri gizlemek için removeCharacters fonksiyonu
function removeCharacters() {
    var characterContainer = document.querySelector(".row");
    characterContainer.parentNode.removeChild(characterContainer);

    // Butonun yazısını ve fonksiyonunu değiştir
    var showButton = document.getElementById("showButton");
    showButton.innerHTML = "Karakterleri Göster";
    showButton.classList.remove("btn-danger");
    showButton.classList.add("btn-primary");
    showButton.onclick = renderCharacters;
}

// Butona tıklandığında karakterleri göster veya gizle aşaması
document.getElementById("toggleButton").addEventListener("click", function () {
    const buttonText = this.innerText;
    if (buttonText === "Karakterleri Göster") {
        renderCharacters(); // Karakterleri göster
        this.innerText = "Karakterleri Gizle";
        this.classList.remove("btn-success");
        this.classList.add("btn-danger");
    } else {
        document.getElementById("characterCards").innerHTML = ""; // Kartları temizle
        this.innerText = "Karakterleri Göster";
        this.classList.remove("btn-danger");
        this.classList.add("btn-success");
    }
});

// Anavatanları filtrelemek için bir dizi oluşturma aşaması
var homeworldsRaw = charactersData.characters.map(character => {
    return character.homeworld ?? "other";
});

// Tekrarlayan anavatanları temizleme aşaması
var homeworldsUnique = [...new Set(homeworldsRaw)];

// Anavatanları küçük harfe dönüştürme aşaması
var homeworldsLowercase = homeworldsUnique.map(homeworld => homeworld.toLowerCase());

// Artık homeworlds değişkenini kullanabilirim
var homeworlds = homeworldsLowercase;

// Anavatan filtrelerini oluşturma aşaması
var filterContainer = document.getElementById("filterContainer");

homeworlds.forEach(homeworld => {
    var label = document.createElement("label");
    var input = document.createElement("input");
    input.type = "radio";
    input.name = "homeworldFilter";
    input.value = homeworld;
    input.onchange = function () {
        renderCharacters(this.value);
    };
    var text = document.createTextNode(homeworld);
    label.appendChild(input);
    label.appendChild(text);
    filterContainer.appendChild(label);
});

function renderCharacters(selectedHomeworld) {
    var characterContainer = document.getElementById("characterCards");
    characterContainer.innerHTML = ""; // Mevcut kartları temizleme aşaması

    charactersData.characters.forEach(character => {
        if (!selectedHomeworld || character.homeworld.toLowerCase() === selectedHomeworld) {
            var characterCard = `
          <div class="col-md-4">
            <div class="card mb-4 shadow-sm">
              <img class="card-img-top" src="${character.pic}" alt="${character.name}">
              <div class="card-body">
                <h5 class="card-title">${character.name}</h5>
                <p class="card-text">Homeworld: ${character.homeworld}</p>
              </div>
            </div>
          </div>
        `;
            characterContainer.innerHTML += characterCard;
        }
    });
}