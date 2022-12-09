import { defineConfig, presetAttributify, presetUno } from 'unocss';

export default defineConfig({
  exclude: ['node_modules'],
  presets: [presetUno(), presetAttributify()],
  shortcuts: [],
  rules: [],
});
