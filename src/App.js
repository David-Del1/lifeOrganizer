import Content from './components/layout/Content';
import Header from './components/layout/Header';
import Tasks from './components/Tasks';
import { ProjectsProvider, SelectedProjectProvider } from './context';

function App() {


  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
      <div className="App">
        <Header />
        <Content />
        <Tasks />
      </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
}

export default App;
