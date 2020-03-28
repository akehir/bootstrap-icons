/*
 * Public API Surface of the icons lib
 */

// export * from './lib/icons'; // exported separately through the build process.
// Otherwise tree-shaking doesn't fully work (as they would be included in the lib's fesm module
// Which is usually what we want, see:
// https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview#heading=h.ve6e6mrugckx
export * from './lib/icon.component';
export * from './lib/icons.registry';
export * from './lib/icons.module';
