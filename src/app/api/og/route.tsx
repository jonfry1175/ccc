import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'Meta Solusi Digital'
    
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            position: 'relative',
          }}
        >
          {/* Background with gradient */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom right, #f0f9ff, #ffffff)',
              zIndex: 0,
            }}
          />

          {/* Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
              padding: '40px',
            }}
          >
            {/* Logo */}
            <div
              style={{
                fontSize: 64,
                fontWeight: 'bold',
                color: '#1d4ed8',
                marginBottom: 20,
              }}
            >
              Meta Solusi Digital
            </div>

            {/* Title */}
            <div
              style={{
                fontSize: 48,
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#1e293b',
                marginBottom: 20,
                maxWidth: '80%',
              }}
            >
              {title}
            </div>

            {/* Tagline */}
            <div
              style={{
                fontSize: 24,
                color: '#64748b',
                textAlign: 'center',
                maxWidth: '60%',
              }}
            >
              Solusi Digital untuk Bisnis Anda
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message)
    }
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
} 