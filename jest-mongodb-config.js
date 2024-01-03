module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      version: '6.3.0',
      skipMD5: true
    },
    instance: {
      dbName: 'jest'
    },
    autoStart: false
  }
}
