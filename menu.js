const menuData = [
  {
    category: "Pizze",
    items: [
      {
        name: "Margherita",
        description: "Sos pomidorowy, mozzarella, bazylia.",
        prices: {
          "32cm": 20.0,
          "40cm": 28.0,
        },
      },
      {
        name: "Capricciosa",
        description:
          "Sos pomidorowy, mozzarella, szynka, pieczarki, oliwki, cebula.",
        prices: {
          "32cm": 23.0,
          "40cm": 31.0,
        },
      },
      {
        name: "Quattro Formaggi",
        description:
          "Sos śmietanowy, mozzarella, ser gorgonzola, ser pleśniowy, parmezan.",
        prices: {
          "32cm": 25.0,
          "40cm": 33.0,
        },
      },
    ],
  },
  {
    category: "Makarony",
    items: [
      {
        name: "Spaghetti Bolognese",
        description:
          "Makaron spaghetti, sos mięsny z sosem pomidorowym, mielone mięso, przyprawy.",
        price: 18.0,
      },
      {
        name: "Lasagne",
        description:
          "Warstwy makaronu, sos mięsny, ser, przyprawy, zapiekane w piecu.",
        price: 20.0,
      },
      {
        name: "Fettuccine Alfredo",
        description:
          "Makaron fettuccine, sos śmietanowy z serem Parmezan, masło, przyprawy.",
        price: 16.0,
      },
    ],
  },
  {
    category: "Sałatki",
    items: [
      {
        name: "Sałatka Cezar",
        description: "Sałata Rzymska, grzanki, parmezan, sos Cezar.",
        price: 22.0,
      },
      {
        name: "Sałatka Caprese",
        description:
          "Pomidory, mozzarella, świeża bazylia, oliwa z oliwek, sól, pieprz.",
        price: 18.0,
      },
      {
        name: "Sałatka Grecka",
        description:
          "Sałata mieszana, pomidory, ogórki, czerwona cebula, oliwki, ser feta, sos grecki.",
        price: 20.0,
      },
      {
        name: "Sałatka z Grillowanym Kurczakiem",
        description:
          "Sałata mieszana, grillowany kurczak, pomidory, ogórki, papryka, sos vinegret.",
        price: 24.0,
      },
      {
        name: "Sałatka z Awokado i Krewetkami",
        description:
          "Sałata mieszana, krewetki, awokado, pomidory koktajlowe, sos cytrynowy.",
        price: 26.0,
      },
    ],
  },
  {
    category: "Pieczywo",
    items: [
      {
        name: "Bagietka Francuska",
        description:
          "Tradycyjna francuska bagietka, chrupiąca skórka, delikatne wnętrze.",
        price: 5.0,
      },
      {
        name: "Chleb Pszenno-Żytni",
        description:
          "Puszysty chleb pszenny z dodatkiem żytniej mąki, aromatyczny i lekko kwaśny.",
        price: 6.0,
      },
      {
        name: "Bułka Sezamowa",
        description:
          "Bułka pszenna z chrupiącym sezamem na wierzchu, idealna do burgerów.",
        price: 3.5,
      },
      {
        name: "Pumpernikiel",
        description:
          "Gęsty, ciemny chleb na zakwasie z dodatkiem słodkiej melasy, o wyrazistym smaku.",
        price: 7.5,
      },
      {
        name: "Bagel z Makiem",
        description:
          "Pierś z kurczaka, ser, sałata, pomidor, sos majonezowo-musztardowy na słodkim bułeczce z makiem.",
        price: 8.0,
      },
    ],
  },
  {
    category: "Napoje",
    items: [
      {
        name: "Woda mineralna",
        description: "Niegazowana woda mineralna o wysokiej jakości.",
        price: 3.5,
      },
      {
        name: "Lemoniada świeżo wyciskana",
        description:
          "Świeżo wyciskana lemoniada z cytryn, doskonała na gorące dni.",
        price: 6.0,
      },
      {
        name: "Herbata ziołowa",
        description:
          "Zestaw różnych ziół i przypraw, idealny na chłodniejsze dni.",
        price: 3.5,
      },
      {
        name: "Koktajl owocowy",
        description:
          "Koktajl z mieszanki świeżych owoców, orzeźwiający i smaczny.",
        price: 7.5,
      },
      {
        name: "Espresso",
        description: "Tradycyjne włoskie espresso, intensywne i aromatyczne.",
        price: 4.0,
      },
      {
        name: "Cappuccino",
        description:
          "Klasyczny włoski cappuccino z równą częścią espresso, mleka i spienionej mlecznej pianki.",
        price: 5.0,
      },
      {
        name: "Aperol Spritz",
        description:
          "Włoski koktajl z Aperol, prosecco i wodą gazowaną, serwowany z plasterkiem pomarańczy.",
        price: 9.0,
      },
      {
        name: "Limoncello",
        description:
          "Tradycyjny włoski likier cytrynowy, orzeźwiający i aromatyczny.",
        price: 8.0,
      },
      {
        name: "Negroni",
        description:
          "Klasyczny włoski koktajl z Campari, ginem i słodkim wermutem, podawany z plasterkiem pomarańczy.",
        price: 10.0,
      },
    ],
  },
];

addEventListener("load", () => {
  const categories = document.querySelectorAll(".menu-category");
  for (let categoryIndex = 0; categoryIndex < menuData.length; categoryIndex++) {
    const categoryData = menuData[categoryIndex]
    
    let menuItems = ""
    for(let itemsIndex = 0; itemsIndex < categoryData.items.length; itemsIndex++) {
      const itemData = categoryData.items[itemsIndex]

      let price = ""
      if(itemData.price) {
        price = ` <span class="menu-list-item-price">${itemData.price} ZŁ</span>`
      }
      if(itemData.prices) {
        price = `
          <span class="menu-list-item-price">32 CM: ${itemData.prices["32cm"]} ZŁ</span>
          <span class="menu-list-item-price">40 CM: ${itemData.prices["40cm"]} ZŁ </span>
        `
      }

      menuItems += `
        <li>
          <div class="menu-list-item">
            <span class="menu-list-item-name">${itemData.name}</span>
            <div class="menu-list-item-price-box">
             ${price}
            </div>
          </div>
          <span class="menu-list-item-info">${itemData.description}</span>
        </li>
      `
    }


    categories[categoryIndex].innerHTML = `
      <h3 class="menu-category-name">${categoryData.category}</h3>
      <ol class="menu-list">${menuItems}</ol>
    `;
  }
});