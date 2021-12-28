import React from 'react'

const drawBoundingBox = (canvasRef: React.RefObject<HTMLCanvasElement>, image: HTMLImageElement, dimensions: [number, number, number, number]) => {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        const [top, left, bottom, right] = dimensions;
        ctx.strokeStyle = "#1BE554";
        ctx.lineWidth = 2;
        ctx.strokeRect(top, left, right - left, bottom - top);
      }
    }
  }, [dimensions]);