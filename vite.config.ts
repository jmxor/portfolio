import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite-plus"
import vue from "@vitejs/plugin-vue"
import vueDevTools from "vite-plugin-vue-devtools"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    semi: false,
    singleQuote: false,
    sortTailwindcss: {
      stylesheet: "./src/style.css",
      functions: ["clsx", "cn"],
      preserveDuplicates: false,
      preserveWhitespace: false,
    },
  },
  lint: {
    plugins: ["eslint", "typescript", "unicorn", "oxc", "vue", "vitest"],
    categories: {
      correctness: "error",
    },
    env: {
      browser: true,
      builtin: true,
    },
    ignorePatterns: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
    rules: {
      "no-array-constructor": "error",
      "typescript/ban-ts-comment": "error",
      "typescript/no-empty-object-type": "error",
      "typescript/no-explicit-any": "error",
      "typescript/no-namespace": "error",
      "typescript/no-require-imports": "error",
      "typescript/no-unnecessary-type-constraint": "error",
      "typescript/no-unsafe-function-type": "error",
    },
    overrides: [
      {
        files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.cts", "**/*.vue"],
        rules: {
          "constructor-super": "off",
          "getter-return": "off",
          "no-class-assign": "off",
          "no-const-assign": "off",
          "no-dupe-class-members": "off",
          "no-dupe-keys": "off",
          "no-func-assign": "off",
          "no-import-assign": "off",
          "no-new-native-nonconstructor": "off",
          "no-obj-calls": "off",
          "no-redeclare": "off",
          "no-setter-return": "off",
          "no-this-before-super": "off",
          "no-undef": "off",
          "no-unreachable": "off",
          "no-unsafe-negation": "off",
          "no-var": "error",
          "no-with": "off",
          "prefer-const": "error",
          "prefer-rest-params": "error",
          "prefer-spread": "error",
        },
      },
      {
        files: ["src/**/__tests__/*"],
        rules: {
          "vitest/expect-expect": "error",
          "vitest/no-conditional-expect": "error",
          "vitest/no-disabled-tests": "warn",
          "vitest/no-focused-tests": "error",
          "vitest/no-commented-out-tests": "error",
          "vitest/no-identical-title": "error",
          "vitest/no-import-node-test": "error",
          "vitest/no-interpolation-in-snapshots": "error",
          "vitest/no-mocks-import": "error",
          "vitest/no-standalone-expect": "error",
          "vitest/no-unneeded-async-expect-function": "error",
          "vitest/prefer-called-exactly-once-with": "error",
          "vitest/require-local-test-context-for-concurrent-snapshots": "error",
          "vitest/valid-describe-callback": "error",
          "vitest/valid-expect": "error",
          "vitest/valid-expect-in-promise": "error",
          "vitest/valid-title": "error",
        },
      },
    ],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },

  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    tsconfigPaths: true,
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
