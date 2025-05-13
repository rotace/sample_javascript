import { FlatCompat } from '@eslint/eslintrc';
export { vuetify } from 'eslint-config-vuetify'

const compat = new FlatCompat();
export default [
    vuetify(),
    ...compat.extends(
        'plugin:vue/vue3-essential',
        'eslint/recommended',
        'prettier'
    ),
];