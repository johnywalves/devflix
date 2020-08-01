const URL_BACKEND_TOP =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080'
    : 'https://devflixjohnywalves.herokuapp.com'

export default {
  URL_BACKEND_TOP
}
