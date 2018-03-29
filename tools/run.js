function run (task, options) {
  task.default.func('hello')
}
if (require.main === module && process.argv.length > 2) {
  let task = require(`./${process.argv[2]}.js`)
  run(task)
}
export default run
