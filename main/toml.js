
import { stringToBytes } from "https://deno.land/x/binaryify@2.0.0.0/tools.js"

import binaryStringForTomlWasm from "./raw_code/toml.wasm.binaryified.js"
export default stringToBytes(binaryStringForTomlWasm)
