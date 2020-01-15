import { DrawOptions, GraphicOptions } from './Graphic';
import { Raster } from './Raster';

export interface CanvasOptions {
  drawHandler: (ctx: CanvasRenderingContext2D, delta: number) => void;
}

export class Canvas extends Raster {
  constructor(public options: GraphicOptions & CanvasOptions) {
    super(options);
  }

  execute(ctx: CanvasRenderingContext2D, _options?: DrawOptions): void {
    this.options.drawHandler(ctx, 0);
    this.flagDirty();
  }
}
