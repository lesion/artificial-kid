let fs = require('fs')
let path = require('path')
let mime = require('mime')

export default {
  ls: (dir) => {
    return new Promise((resolve, reject) => {
      fs.readdir(dir, (err, files) => {
        if (err) {
          reject(err)
        } else {
          resolve(files.map(file => {
            let type = mime.lookup(file)
            let stat = fs.statSync(path.join(dir, file))
            return { name: file, type, isdir: stat.isDirectory(), size: stat.size }
          }))
        }
      })
    })
  }
}
