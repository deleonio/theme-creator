import { DI } from '@leanup/lib';

export const importCatch = (error: unknown): void => {
  console.warn(error);
};

export const run = (name: string, version: string | null, bootstrap: Function): void => {
  DI.register('Framework', {
    name,
    version,
  });
  bootstrap();
};
