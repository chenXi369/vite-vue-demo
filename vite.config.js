// vite.config.js
export default {
  proxy: {
    '/api': {
      target: 'http://v.juhe.cn',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  }
}