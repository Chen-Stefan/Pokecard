import {useEffect, useState} from 'react'

function App() {

  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()
    // 下面这个函数，使你点一下load more就能update loadMore的state, 每次都能load 20个pokemon
    setLoadMore(data.next)

    function createPokemonObject(result) {
      result.forEach( async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        // 用speard operator ... 让新的data不取代原来的array, 而是Push到原有的array中
        setAllPokemons(currentList => [...currentList, data])
      })
    }
    createPokemonObject(data.results)

  }
  // 我希望useEffect里面的东西只run一次，所以第二个参数是一个空的array
  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <div className="app-container">
      <h1>Pokecards</h1>
      <div className="pokemon-container">
        <div className="all-container">

        </div>
        <button className="load-more">Load more</button>
      </div>
    </div>
  );
}

export default App;
