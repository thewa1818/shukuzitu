// const pokemonNum = 10;

// // 関数=魔法（おまじない）　自分で作るver

// // 繰り返し処理の魔法
// const fetchPokemons = async () => {
//   for (let i = 1; i <= pokemonNum; i++) {
//     //1 ~ 10
//     await getPokemon(i);
//   }
// };

// データを取得する魔法
const getPokemon = async (id) => {
  const url = `https://date.nager.at/api/v2/PublicHolidays/2020/JP`;
  const res = await fetch(url);
  const pokemon = await res.json();
  console.log(pokemon);
  createPokemon(pokemon); //データ塊を渡している
};

//htmlを準備して画面に表示する魔法

function createPokemon(pokemon) {
  console.log(pokemon,"vvv");
  const html = pokemon.map((item,index)=>{
    console.log(item,"vvvv")
    console.log(index,"ssss")

    const poke = `
    <p class="id">${index}番目</p>
    <p class="id">No.${item.date}</p>
    <p class="id">${item.localName}</p>
    
   
    `;
   return poke
  })
 
  $(".list").append(html);
}

getPokemon();