
import { stringToBytes } from "https://deno.land/x/binaryify@2.0.0.0/tools.js"

import binaryStringForWatWasm from "./raw_code/wat.wasm.binaryified.js"
export default stringToBytes(binaryStringForWatWasm)
