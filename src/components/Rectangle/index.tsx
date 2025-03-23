import { Rectangle } from '@/features/canvas/canvasSlice';
import { Rect } from 'react-konva';

export const RectangleComponent = ({ rectangle }: { rectangle: Rectangle }) => {
  return (
    <Rect
      key={rectangle.id}
      x={rectangle.coordinates.x}
      y={rectangle.coordinates.y}
      width={rectangle.width}
      height={rectangle.height}
      fill="green"
      opacity={0.2}
    ></Rect>
  );
};
