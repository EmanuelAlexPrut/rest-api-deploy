//COMO LEER UN JSON EN ESModules RECOMENDADO ACTUALMENTE
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
export const readJSON = (path) => require(path)