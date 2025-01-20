import fs from 'fs'
import satori from 'satori'
import sharp from 'sharp'

async function generateOGImage() {
  const svg = await satori(
    <div style={{ /* same styles as above */ }}>
      {/* same content as above */}
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fs.readFileSync('./public/fonts/Inter-Bold.ttf'),
          weight: 700,
          style: 'normal',
        },
      ],
    }
  )

  // Convert SVG to PNG
  const png = await sharp(Buffer.from(svg))
    .png()
    .toFile('./public/og-image.jpg')
}

generateOGImage() 