import * as THREE from "three"

function noise2D(x, y) {
  return Math.sin(x * 12.9898 + y * 78.233) * 43758.5453 % 1
}

function createCanvas(width, height) {
  const canvas = document.createElement("canvas")
  canvas.width = width
  canvas.height = height
  return { canvas, ctx: canvas.getContext("2d") }
}

export function generateRockyTexture(baseColor) {
  const { canvas, ctx } = createCanvas(512, 256)
  const r = parseInt(baseColor.slice(1, 3), 16)
  const g = parseInt(baseColor.slice(3, 5), 16)
  const b = parseInt(baseColor.slice(5, 7), 16)

  for (let x = 0; x < 512; x++) {
    for (let y = 0; y < 256; y++) {
      const n = Math.random() * 0.3 + 0.7
      const crater = Math.sin(x * 0.1) * Math.sin(y * 0.15) * 0.15
      const dr = Math.min(255, Math.max(0, r * n + crater * 50))
      const dg = Math.min(255, Math.max(0, g * n + crater * 30))
      const db = Math.min(255, Math.max(0, b * n + crater * 20))
      ctx.fillStyle = `rgb(${dr|0},${dg|0},${db|0})`
      ctx.fillRect(x, y, 1, 1)
    }
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  return texture
}

export function generateGasGiantTexture() {
  const { canvas, ctx } = createCanvas(512, 256)
  const colors = [
    [210, 180, 140], [220, 200, 160], [180, 150, 120],
    [200, 170, 130], [230, 210, 180], [190, 160, 110],
  ]

  for (let y = 0; y < 256; y++) {
    const band = Math.floor(y / 20) % colors.length
    const nextBand = (band + 1) % colors.length
    const mix = (y % 20) / 20
    const r = colors[band][0] * (1 - mix) + colors[nextBand][0] * mix
    const g = colors[band][1] * (1 - mix) + colors[nextBand][1] * mix
    const b = colors[band][2] * (1 - mix) + colors[nextBand][2] * mix
    const noise = (Math.random() - 0.5) * 20

    for (let x = 0; x < 512; x++) {
      const swirl = Math.sin(x * 0.02 + y * 0.05) * 10
      ctx.fillStyle = `rgb(${r + noise + swirl | 0},${g + noise | 0},${b + noise | 0})`
      ctx.fillRect(x, y, 1, 1)
    }
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  return texture
}

export function generateIceTexture() {
  const { canvas, ctx } = createCanvas(512, 256)

  for (let x = 0; x < 512; x++) {
    for (let y = 0; y < 256; y++) {
      const crack = Math.sin(x * 0.3) * Math.sin(y * 0.4) > 0.95 ? 0.6 : 0
      const noise = (Math.random() - 0.5) * 0.15
      const brightness = 0.8 + crack + noise
      const v = Math.min(1, Math.max(0, brightness)) * 255
      ctx.fillStyle = `rgb(${v|0},${v|0},${Math.min(255, v + 30)|0})`
      ctx.fillRect(x, y, 1, 1)
    }
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  return texture
}
