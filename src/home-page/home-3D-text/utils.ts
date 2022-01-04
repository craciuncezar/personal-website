export function distance(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

export function visibleHeightAtZDepth(
  depth: number,
  camera: THREE.PerspectiveCamera
): number {
  const cameraOffset = camera.position.z;
  if (depth < cameraOffset) depth -= cameraOffset;
  else depth += cameraOffset;

  const vFOV = (camera.fov * Math.PI) / 180;

  return 2 * Math.tan(vFOV / 2) * Math.abs(depth);
}

export function visibleWidthAtZDepth(
  depth: number,
  camera: THREE.PerspectiveCamera
): number {
  const height = visibleHeightAtZDepth(depth, camera);
  return height * camera.aspect;
}
