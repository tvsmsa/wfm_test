import { useState, useLayoutEffect } from 'react';
import { Router } from 'react-router-dom';
import { BrowserHistory } from 'history';

export type HistoryRouterProps = {
  history: BrowserHistory;
  basename?: string;
  children?: React.ReactNode;
};

export default function HistoryRouter({ basename, children, history }: HistoryRouterProps): JSX.Element {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
}
