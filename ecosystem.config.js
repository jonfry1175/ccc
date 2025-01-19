module.exports = {
  apps: [
    {
      name: 'meta-solusi-digital',
      script: 'serve',
      args: 'out -p 3001',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env_production: {
        NODE_ENV: 'production',
        PORT: 3001
      }
    }
  ]
} 