import { ImageResponse } from 'next/og';


export const alt = 'SCALE GAME — Digital Marketing & Growth Agency';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#050505',
          padding: '80px',
          fontFamily: 'sans-serif',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Top bar meta */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
            paddingBottom: '24px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '10px',
                height: '10px',
                backgroundColor: '#ffffff',
                borderRadius: '50%',
              }}
            />
            <span
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '14px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                fontFamily: 'monospace',
              }}
            >
              SCALE GAME // DIGITAL MARKETING & GROWTH AGENCY
            </span>
          </div>
          <span
            style={{
              color: 'rgba(255, 255, 255, 0.4)',
              fontSize: '14px',
              letterSpacing: '0.1em',
              fontFamily: 'monospace',
            }}
          >
            scalegame.digital
          </span>
        </div>

        {/* Center Main Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              color: 'rgba(255, 255, 255, 0.5)',
              fontSize: '16px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontFamily: 'monospace',
            }}
          >
            THE STRATEGIC ADVANTAGE
          </div>
          <div
            style={{
              fontSize: '96px',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.04em',
              lineHeight: 0.9,
              textTransform: 'uppercase',
            }}
          >
            WE PLAY. YOU WIN.
          </div>
          <p
            style={{
              fontSize: '24px',
              color: 'rgba(255, 255, 255, 0.75)',
              maxWidth: '900px',
              marginTop: '16px',
              lineHeight: 1.4,
              fontWeight: 300,
            }}
          >
            We target your ideal audience, build authentic trust in your product, and convert engagement into high-value sales.
          </p>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255, 255, 255, 0.15)',
            paddingTop: '24px',
            color: 'rgba(255, 255, 255, 0.4)',
            fontSize: '14px',
            fontFamily: 'monospace',
          }}
        >
          <span>TACTICAL_SYS // GROWTH METHODOLOGY</span>
          <span>scalegame001@gmail.com</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
