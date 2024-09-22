import React, { useEffect, useRef } from 'react';

export const MatrixBackground: React.FC = () => {
    //Ref to the canvas element
    const canvasRef = useRef<HTMLCanvasElement>(null)

    // Effect to run the animation
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        };

        window.addEventListener('resize', resizeCanvas)
        resizeCanvas()

        const columns = canvas.width / 19
        const drops: number[] = new Array(Math.floor(columns)).fill(1)

        const getColor = () => {
            const baseGray = 100
            const variance = 50
            const gray = baseGray - Math.random() * variance
            return `rgba(${gray}, ${gray}, ${gray}, 0.8)`
        }

        const draw = () => {
        ctx.fillStyle = 'rgba(24, 24, 27, 0.05'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        for (let i = 0; i < drops.length; i++) {
            const text = String.fromCharCode(Math.random() * 128)
            ctx.fillStyle = getColor()
            ctx.font = '15px monospace'
            ctx.fillText(text, i * 20, drops[i] * 20)

            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
            drops[i] = 0
            }

            drops[i]++
        }

        animationFrameId = requestAnimationFrame(draw)
        }

        draw()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            cancelAnimationFrame(animationFrameId)
        }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: -1, background: "#18181b" }}
    />
  )
}