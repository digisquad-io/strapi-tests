import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFound } from 'strapi-helper-plugin';
import { Wrapper } from './Wrapper';

const App = () => {
  return (
    <Wrapper>
      <Switch>
        <Route component={NotFound} />
      </Switch>
    </Wrapper>
  );
};

export default App;
