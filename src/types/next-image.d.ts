import * as React from "react";

declare module "next/image" {
  export interface ImageProps
    extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string | import("next/dist/shared/lib/get-img-props").StaticImport;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    sizes?: string;
    priority?: boolean;
    quality?: number;
  }
  const Image: React.FC<ImageProps>;
  export default Image;
}
