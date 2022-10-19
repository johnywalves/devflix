const URL_BACKEND_TOP =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : 'https://devflix.up.railway.app'

export default {
  URL_BACKEND_TOP
}
