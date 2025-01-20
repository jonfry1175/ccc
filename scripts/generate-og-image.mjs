import fetch from 'node-fetch'
import { dirname, join } from 'path'
import React from 'react'
import satori from 'satori'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const projectRoot = join(__dirname, '..')

// Fetch the font file
async function fetchFont() {
  const API_URL = 'https://api.fontsource.org/v1/fonts/inter/latin-700-normal.ttf'
  
  try {
    const response = await fetch(API_URL)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const arrayBuffer = await response.arrayBuffer()
    return arrayBuffer
  } catch (error) {
    console.error('Error fetching font:', error)
    throw error
  }
}

const OGImage = () => React.createElement('div', {
  style: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    position: 'relative',
    background: 'linear-gradient(to bottom right, #f0f9ff, #ffffff)',
  }
}, 
  React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
    }
  }, [
    React.createElement('div', {
      key: 'title',
      style: {
        fontSize: 64,
        fontWeight: 'bold',
        color: '#1d4ed8',
        marginBottom: 20,
      }
    }, 'Meta Solusi Digital'),
    React.createElement('div', {
      key: 'tagline',
      style: {
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1e293b',
        marginBottom: 20,
        maxWidth: '80%',
      }
    }, 'Solusi Digital untuk Bisnis Anda')
  ])
)

async function generateOGImage() {
    try {
        const outputPath = join(projectRoot, 'public', 'og-image.jpg')
        const fontData = await fetchFont()

        const svg = await satori(
            React.createElement(OGImage),
            {
                width: 1200,
                height: 630,
                fonts: [
                    {
                        name: 'Inter',
                        data: fontData,
                        weight: 700,
                        style: 'normal',
                    },
                ],
            }
        )

        await sharp(Buffer.from(svg))
            .png()
            .toFile(outputPath)
        
        console.log('OG Image generated successfully!')
    } catch (error) {
        console.error('Error generating OG image:', error)
        process.exit(1)
    }
}

generateOGImage() 