import { AsyncStorage } from 'react-native';

export default {
  key: 'primary',
  storage: AsyncStorage,
  // Reducer keys that you do NOT want stored to persistence here.
  blacklist: ['nav'],
  // Optionally, just specify the keys you DO want stored to persistence.
  // An empty array means 'don't store any reducers' -> infinitered/ignite#409
  // whitelist: [],
}

