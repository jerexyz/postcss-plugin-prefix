# PostCSS Plugin Prefix

[PostCSS] plugin postcss plugin for add css prefix.

[postcss]: https://github.com/postcss/postcss

```css
/* Input example */
a {
}
.ant-test {
}
```

```css
/* Output example */
#test a {
}
#test .ant-test {
}
```

## Usage

Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you already use PostCSS, add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('@jerexyz/postcss-plugin-prefix')({
+      prefix: '#test',
+      matchRule: (selector) => {
+        if (/^.ant/.test(selector)) {
+          return true;
+        }
+        if (!/^[.#]/.test(selector)) {
+          return true;
+        }
+        return false;
+      },
+    }),
    require('autoprefixer')
  ]
}
```

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

[official docs]: https://github.com/postcss/postcss#usage
