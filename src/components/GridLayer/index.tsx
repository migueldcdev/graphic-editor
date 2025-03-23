import { useAppSelector } from '@/app/hooks';
import { Layer, Line, Rect } from 'react-konva';

const GRID_SIZE = 2;
const STAGE_WIDTH = 600;
const STAGE_HEIGHT = 1000;

export const GridLayer = () => {
  const lines = [];
  const rectangles = useAppSelector((state) => state.canvas.rectangles);
  // Vertical lines
  for (let i = 0; i < STAGE_WIDTH / GRID_SIZE; i++) {
    lines.push(
      <Line
        key={`v-${i}`}
        points={[i * GRID_SIZE, 0, i * GRID_SIZE, STAGE_HEIGHT]}
        stroke="blue"
        strokeWidth={0.1}
      />,
    );
  }

  // Horizontal lines
  for (let i = 0; i < STAGE_HEIGHT / GRID_SIZE; i++) {
    lines.push(
      <Line
        key={`h-${i}`}
        points={[0, i * GRID_SIZE, STAGE_WIDTH, i * GRID_SIZE]}
        stroke="blue"
        strokeWidth={0.1}
      />,
    );
  }

  return (
    <Layer>
      {rectangles.map((rectangle) => (
        <Rect
          x={rectangle.coordinates.x}
          y={rectangle.coordinates.y}
          width={rectangle.width}
          height={rectangle.height}
          rotation={rectangle.rotation}
          fill="blue"
          opacity={0.2}
        ></Rect>
      ))}
      {lines}
    </Layer>
  );
};
