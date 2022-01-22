import { useGetPokemonByNameQuery } from '../store/http/pokemon';

interface Props {}

const Pokemon = (props: Props) =>{
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  console.log(data, error, isLoading);
  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  )
}

export default Pokemon;