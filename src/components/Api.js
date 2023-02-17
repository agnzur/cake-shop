export async function getAvailableCakes() {
  const cakeList = [
    {
      id: 101,
      name: "Jabłecznik",
      price: 10,
      imageUrl:
        "https://delektujemy.pl/wp-content/uploads/2015/12/babciny-jablecznik.png",
    },

    {
      id: 102,
      name: "Paczka pierników",
      price: 15,
      imageUrl:
        "http://www.wegeprzepis.pl/public_html/wegeprzepis/wp-content/uploads/2020/11/aIMG_4066-683x1024.jpg",
    },
    {
      id: 103,
      name: "Sernik japoński",
      price: 20,
      imageUrl:
        "https://staticsmaker.iplsc.com/smaker_production_2022_07_22/b779c7f5b32a7cde230f570a709cf6a1-recipe_main.jpg",
    },
  ];
  return cakeList;
}
