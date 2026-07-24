import { Html } from "@react-three/drei"

export default function MemoryPopup({ memory, onClose }) {
  const handleImageError = (e) => {
    e.target.style.display = 'none'
  }

  return (
    <Html position={[0, 2, 0]} center>
      <div style={{ position: 'relative' }}>
        <div
          onClick={onClose}
          onTouchEnd={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9998,
            cursor: 'default',
          }}
        />
        <div
          onClick={(e) => e.stopPropagation()}
          onTouchEnd={(e) => e.stopPropagation()}
          style={{ position: 'relative', zIndex: 9999 }}
        >
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.88)',
              color: '#fff',
              padding: '20px 28px',
              borderRadius: 16,
              width: '85vw',
              maxWidth: 420,
              textAlign: 'center',
              fontFamily: 'Georgia, serif',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow: '0 12px 48px rgba(0,0,0,0.6)',
            }}
          >
            <img
              src={memory.image}
              alt={memory.title}
              onError={handleImageError}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: 260,
                objectFit: 'cover',
                borderRadius: 10,
                marginBottom: 16,
              }}
            />
            <h3 style={{ color: memory.color, margin: '0 0 6px', fontSize: 22 }}>
              {memory.title}
            </h3>
            <p style={{ margin: '0 0 10px', fontSize: 14, opacity: 0.6 }}>
              {memory.date}
            </p>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6 }}>
              {memory.message}
            </p>
          </div>
        </div>
      </div>
    </Html>
  )
}
