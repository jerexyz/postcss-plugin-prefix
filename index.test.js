let postcss = require('postcss')

let plugin = require('./')

async function run (input, output, opts) {
  let result = await postcss([plugin(opts)]).process(input, {
    from: undefined,
  })
  expect(result.css).toBe(output)
  expect(result.warnings()).toHaveLength(0)
}

it('test prefix if work', async () => {
  await run('a{ }.ant-test{}', '#test a{ }#test .ant-test{}', {
    prefix: '#test',
    matchRule: selector => {
      if (/^.ant/.test(selector)) {
        return true
      }
      if (!/^[#.]/.test(selector)) {
        return true
      }
      return false
    },
  })
})
