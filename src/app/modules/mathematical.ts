export module Mathematical {

  export function radians(grados: number): number {
    return grados * Math.PI / 180;
  }
  export function degrees(radianes: number): number {
    return radianes * 180 / Math.PI;
  }
}
