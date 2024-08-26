// Layouts
import PageLayout from '../src/layouts/PageLayout'; // TODO: will apply alias `@layouts/PageLayout` in here

const App = () => {
  return (
    <PageLayout>
      <header className="App-header">
        <h1 className="text-3xl text-center font-bold underline text-red-600">
          Simple React Typescript Tailwind Sample
        </h1>
      </header>
    </PageLayout>
  );
};

export default App;
