import boButton from './components/Button/Button.vue';
import '../src/styles/output.css';

import { App } from 'vue';

const components = { boButton } as any;

export default {
  install(App: App, options = {}) {
    // components
    for (const componentName in components) {
      const component = components[componentName];

      App.component(component.name, component);
    }
  }
};

export { boButton };
