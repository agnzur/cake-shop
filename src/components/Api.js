export async function getAvailableCakes() {
  const cakeList = [
    {
      id: 101,
      name: "Jabłecznik",
      price: 10,
      imageUrl:
        "https://www.jocooks.com/wp-content/uploads/2019/04/apple-pie-1.jpg",
    },

    {
      id: 102,
      name: "Paczka pierników",
      price: 15,
      imageUrl:
        "https://akademiasmaku.pl/upload/recipes/4285/swiateczne-przepisy-pierniczki-4285.jpg",
    },
    {
      id: 103,
      name: "Sernik japoński",
      price: 15,
      imageUrl:
        "https://takestwoeggs.com/wp-content/uploads/2022/05/Japanese-Cotton-Cheesecake-Takestwoeggs-final-photography-2.jpg",
    },

    {
      id: 104,
      name: "Paczka ciasteczek maślanych",
      price: 20,
      imageUrl:
        "https://i.wpimg.pl/O/644x626/d.wpimg.pl/1815286805-54343270/ciasteczka.jpg",
    },
    {
      id: 105,
      name: "Tarta pistacjowa",
      price: 13,
      imageUrl:
        "http://static1.squarespace.com/static/5161a33ce4b058e82d881bb3/5161b6f5e4b024350bb5fa08/5873b1aabe65949ec2c5ad70/1483979880186/120116_Wonderful+Pistachios0685.jpg?format=1500w",
    },
    {
      id: 106,
      name: "Torcik czekoladowy",
      price: 13,
      imageUrl:
        "https://bezbez.pl/wp-content/uploads/2020/08/weganski-bezglutenowy-tort-czekoladowy-z-malinami-bez-jajek-bez-nabialu-9-585x585.jpg",
    },

    {
      id: 107,
      name: "Tarta malinowa",
      price: 12,
      imageUrl: "https://cdn.mos.cms.futurecdn.net/EDXsFZdpJb4gbHkQkRUiGU.jpg",
    },

    {
      id: 108,
      name: "Ciasto drożdżowe ze śliwkami",
      price: 9,
      imageUrl:
        "https://www.putka.pl/upload/produkty/b_1628150960_drożdżowe%20śliwka%206.jpg",
    },
    {
      id: 109,
      name: "Mazurek Wielkanocny",
      price: 11,
      imageUrl:
        "https://zdrowejestczadowe.pl/wp-content/uploads/2019/04/Fit-mazurek-wielkanocny-bez-cukru-z-czekoladowym-kremem.jpg",
    },
  ];
  return cakeList;
}
