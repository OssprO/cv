export abstract class Mathematical {
  public static radians(grados: number): number {
    return grados * Math.PI / 180;
  }
  public static degrees(radianes: number): number {
    return radianes * 180 / Math.PI;
  }
}
