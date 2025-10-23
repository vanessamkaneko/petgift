import { useFetch } from '../hooks/useFetch';

function Home() {
  const { data } = useFetch('/example');

  return (
    <div>
      <h1>Home Page</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Carregando...'}
    </div>
  );
}

export default Home;