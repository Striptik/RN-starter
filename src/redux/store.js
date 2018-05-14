import configureStore from './configureStore';

export default () => {

  const { store, persistor } = configureStore();
  return { store, persistor };

};