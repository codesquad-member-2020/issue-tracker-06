import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Main from '@/components/Main/Main';
import Issue from '@/components/Issue/Issue';
import IssueDetail from '@/components/IssueDetail/IssueDetail';
import NewIssue from '@/components/NewIssue/NewIssue';
import Labels from '@/components/Labels/Labels';
import Milestones from '@/components/Milestones/Milestones';
import NewMilestone from '@/components/NewMilestone/NewMilestone';

import GlobalStyleProvider from '@/components/style/GlobalStyle';

const App = () => {
  return (
    <GlobalStyleProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/issueList" component={Issue} />
          <Route path="/issueDetail" component={IssueDetail} />
          <Route path="/newIssue" component={NewIssue} />
          <Route path="/labels" component={Labels} />
          <Route path="/milestones" component={Milestones} />
          <Route path="/newMilestone" component={NewMilestone} />
          <Redirect path="*" to="/" />
        </Switch>
      </BrowserRouter>
    </GlobalStyleProvider>
  );
};

export default App;
