
import { stringToBytes } from "https://deno.land/x/binaryify@2.0.0.0/tools.js"

import binaryStringForRustWasm from "./raw_code/rust.wasm.binaryified.js"
export default stringToBytes(binaryStringForRustWasm)
