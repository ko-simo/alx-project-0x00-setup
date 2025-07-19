import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export default [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
];
