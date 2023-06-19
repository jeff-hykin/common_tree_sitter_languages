
import { stringToBytes } from "https://deno.land/x/binaryify@2.0.0.0/tools.js"

import binaryStringForJsonWasm from "./raw_code/json.wasm.binaryified.js"
export default stringToBytes(binaryStringForJsonWasm)
