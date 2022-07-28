const { remove, mkdirp } = require('fs-extra')
const { join } = require('pathe')


async function ensureDir (dir) {
  await remove(dir)
  await mkdirp(dir)
}

async function generate ({ input, distDir, sizes, maskablePadding, splash, hash }) {
  await ensureDir(distDir)



}

generate(JSON.parse(process.argv[2])).then(() => {
  process.exit(0)
}).catch((error) => {
  console.error(error) // eslint-disable-line no-console
  process.exit(1)
})
