import './App.css';
// import ClassBasedComp from './components/demo/ClassBasedComp';
// import EffectHook from './components/demo/EffectHook';
// import FormDemo from './components/demo/FormDemo';
import Notes from './components/Notes/Notes';
// import ReducerHook from './components/demo/ReducerHook';

import { Route, Switch, Redirect } from 'react-router-dom';
import Posts from './components/Posts/Posts';
import PostDetail from './components/Posts/PostDetail';
import Header from './components/Header/Header';
import Counter from './components/Counter/Counter';

function App() {

  // let title = "The title"
  // const [showComp, setShowComp] = useState(false);

  return (
    <div className="container">

      <Header />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/notes" />
        </Route>
      <Route path="/notes">
        <Notes />
      </Route>
      <Route path="/posts" exact>
        <Posts />
      </Route>
      <Route path="/posts/:id">
        <PostDetail />
      </Route>
      <Route path="/counter">
        <Counter />
      </Route>
      
      </Switch>



      {/* <ReducerHook /> */}

      {/* <EffectHook /> */}

      {/* <FormDemo /> */}

      {/* <button onClick={() => { setShowComp(!showComp)}}>Toggle Comp</button>
      { showComp && <ClassBasedComp title={title}/>}
      <br /> <hr />*/}
      {/* <Notes />  */}
    </div>
  );
}

export default App;
