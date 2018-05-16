import { AsyncStorage } from 'react-native';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export default {
  key: 'primary',
  storage: AsyncStorage,
  stateReconcilier: autoMergeLevel2,
  // Reducer keys that you do NOT want stored to persistence here.
  // blacklist: [],

  // Optionally, just specify the keys you DO want stored to persistence.
  // An empty array means 'don't store any reducers' -> infinitered/ignite#409
  // whitelist: [],

  //
}

