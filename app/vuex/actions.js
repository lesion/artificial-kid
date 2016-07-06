/**
 * setCwd
 * @param  {String} path      [a path]
 */
export const setCwd = ({dispatch}, path) => {
  console.error('son qui in actions')
  console.error(dispatch)
  dispatch('SET_CWD', path)
}
