type AssetMap<T> = {
  readonly [key in T]: {
    readonly path: string,
    readonly key: string
  };
}