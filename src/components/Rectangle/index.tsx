import { useAppDispatch } from '@/app/hooks';
import {
  Coordinates,
  Rectangle,
  updateRectangleCoordinates,
} from '@/features/canvas/canvasSlice';
import { Rect } from 'react-konva';

export const RectangleComponent = ({ rectangle }: { rectangle: Rectangle }) => {
  const dispatch = useAppDispatch();

  function handleOnDragEnd(coordinates: Coordinates) {
    const payload = { id: rectangle.id, coordinates };
    dispatch(updateRectangleCoordinates(payload));
  }

  return (
    <Rect
      x={rectangle.coordinates.x}
      y={rectangle.coordinates.y}
      width={rectangle.width}
      height={rectangle.height}
      fill="green"
      opacity={0.2}
      draggable
      onDragEnd={(e) => handleOnDragEnd({ x: e.target.x(), y: e.target.y() })}
    ></Rect>
  );
};
