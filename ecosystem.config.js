module.exports = {
  apps: [{
      name: 'bch-txs',
      script: 'dist/server.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
  }]
}