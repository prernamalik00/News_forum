import React from 'react';
import Body from './components/Body';
import Bussines from './components/DrawerComponents/Bussines';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Switch>
 <Route exact path='/' component={Body} />
 <Route path='/business' component={Bussines} />
 {/* <Route path='/sports' component={sports} /> */}
 </Switch>
    </>
  );
}
export default App;
