// import React from 'react';
import App from './containers/App';
import pluginLogo from './assets/images/logo.svg';
import Settings from './containers/Settings';
import pluginId from './pluginId';

export default (strapi) => {
  const menuSection = {
    id: pluginId,
    title: {
      id: `${pluginId}.foo`,
      defaultMessage: 'Super cool setting',
    },
    links: [
      // this is causing the issue:
      {
        title: 'Setting page 1',
        name: 'setting1',
        to: `${strapi.settingsBaseURL}/setting1`,
      },
    ],
  };

  const plugin = {
    id: pluginId,
    icon: 'plug',
    name: 'My custom plugin',
    description: 'Homeland to do awesome things',
    pluginLogo,
    preventComponentRendering: false,
    isReady: true,
    isRequired: true,
    initializer: () => null,
    mainComponent: App,
    trads: {},
    injectedComponents: [],
    blockerComponent: null,
    blockerComponentProps: {},
    settings: {
      mainComponent: Settings,
      menuSection,
    },
  };

  return strapi.registerPlugin(plugin);
};
