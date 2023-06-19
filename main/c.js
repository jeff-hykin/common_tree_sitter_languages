
import { stringToBytes } from "https://deno.land/x/binaryify@2.0.0.0/tools.js"

import binaryStringForCWasm from "./raw_code/c.wasm.binaryified.js"
export default stringToBytes(binaryStringForCWasm)
