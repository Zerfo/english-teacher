import { Provider } from "react-redux";

import App from "containers/app";

import configureStore from "store";

const store = configureStore();

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Root;
