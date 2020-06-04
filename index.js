let postcss = require('postcss')


module.exports = postcss.plugin('postcss-plugin-prefix', ({prefix,matchRule}) => {

  // Work with options here

  return (root, result) => {

    root.walkRules(function (rule) {
      // don't touch @keyframes children
      if (rule.parent && rule.parent.name === 'keyframes') {
          return
      }
      rule.selectors = rule.selectors.map(function (selector) {
          // replace combinator selectors that can't be prefixed.
          selector = selector.replace(
              /^html\.body\.|^html\.|^body\./, prefix + '.'
          )

          // replace descendant combinators that can't be prefixed.
          selector = selector.replace(/^body$|^html$/, prefix)
          if(matchRule(selector)){
            return `${prefix} ${selector}`
          }
          return selector
      })
  })

  }
})
