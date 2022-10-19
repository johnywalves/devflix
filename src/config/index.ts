const URL_BACKEND_TOP =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8090'
    : 'https://devflix.up.railway.app'

export default {
  URL_BACKEND_TOP
}
