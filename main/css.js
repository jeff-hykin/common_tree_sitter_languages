
import { stringToBytes } from "https://deno.land/x/binaryify@2.0.0.0/tools.js"

import binaryStringForCssWasm from "./raw_code/css.wasm.binaryified.js"
export default stringToBytes(binaryStringForCssWasm)