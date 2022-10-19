/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

if (isProd) {
  module.exports = withPWA({
    pwa: {
      dest: 'public'
    }
  })
}

module.exports = {}
