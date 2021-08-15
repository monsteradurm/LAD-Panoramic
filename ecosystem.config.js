module.exports = {
  apps : [{
    name   : "LADPano2",
    script : "./server.js",
    env_production: {
       host : "0.0.0.0",
       NODE_ENV: "production"
    }
  }]
}
