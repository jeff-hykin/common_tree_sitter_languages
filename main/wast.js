
import { stringToBytes } from "https://deno.land/x/binaryify@2.0.0.0/tools.js"

import binaryStringForWastWasm from "./raw_code/wast.wasm.binaryified.js"
export default stringToBytes(binaryStringForWastWasm)
