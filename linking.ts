const config = {
  screens: {
    Home: 'home',
    Profile: 'profile/:username',
  },
};

export const linking = {
  prefixes: ['deeplinkPoc://'],
  config,
};
