const animals = [
    {
        name: "Lion",
        image: "/images/lion.jpeg",
        description: "The lion is a species in the family Felidae."
    },
    {
        name: "Cats",
        image: "/images/cats.jpeg",
        description: "Cats are the purest soul."
    },
    {
        name: "Tiger",
        image: "/images/tiger.jpeg",
        description: "The tiger is the largest living cat species."
    },
    {
        name: "Panda",
        image: "/images/panda.jpeg",
        description: "Panda are the cute."
    },
    {
        name: "Squirrel",
        image: "/images/squirrel.jpg",
        description: "Squirrel have beautiful eyes."
    },
];

function searchAnimal() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const resultsContainer = document.getElementById("resultsContainer");

    resultsContainer.innerHTML = '';

    for (let animal of animals) {
        if (animal.name.toLowerCase().includes(searchTerm)) {
            resultsContainer.innerHTML += `
                <div class="card">
                    <img src="${animal.image}" alt="${animal.name}">
                    <h3>${animal.name}</h3>
                    <p>${animal.description}</p>
                </div>
            `;
        }
    }

    if (resultsContainer.innerHTML === '') {
        resultsContainer.innerHTML = '<p>No results found</p>';
    }
}


