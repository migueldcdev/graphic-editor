/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppDispatch } from '@/app/hooks';
import {
  Coordinates,
  Rectangle,
  updateRectangleCoordinates,
  updateRectangleRotation,
  updateRectangleSize,
} from '@/features/canvas/canvasSlice';
import { useEffect, useRef, useState } from 'react';
import { Rect, Transformer } from 'react-konva';

export const RectangleComponent = ({ rectangle }: { rectangle: Rectangle }) => {
  const dispatch = useAppDispatch();
  const shapeRef = useRef<any>(null);
  const transformerRef = useRef<any>(null);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (isSelected && transformerRef.current && shapeRef.current) {
      transformerRef.current.nodes([shapeRef.current]);
      transformerRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  function handleOnDragEnd(coordinates: Coordinates) {
    dispatch(updateRectangleCoordinates({ id: rectangle.id, coordinates }));
  }

  function handleTransformEnd() {
    const node = shapeRef.current;

    dispatch(
      updateRectangleSize({
        id: rectangle.id,
        width: node.width() * node.scaleX(),
        height: node.height() * node.scaleY(),
      }),
    );
    node.scaleX(1);
    node.scaleY(1);
    dispatch(
      updateRectangleRotation({ id: rectangle.id, rotation: node.rotation() }),
    );
  }

  return (
    <>
      <Rect
        ref={shapeRef}
        x={rectangle.coordinates.x}
        y={rectangle.coordinates.y}
        width={rectangle.width}
        height={rectangle.height}
        rotation={rectangle.rotation}
        fill="green"
        opacity={0.2}
        draggable
        onClick={() => setIsSelected(true)}
        onTap={() => setIsSelected(true)}
        onDragEnd={(e) => handleOnDragEnd({ x: e.target.x(), y: e.target.y() })}
        onTransformEnd={handleTransformEnd}
      />
      {isSelected && <Transformer ref={transformerRef} />}
    </>
  );
};
