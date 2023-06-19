
import { stringToBytes } from "https://deno.land/x/binaryify@2.0.0.0/tools.js"

import binaryStringForCppWasm from "./raw_code/cpp.wasm.binaryified.js"
export default stringToBytes(binaryStringForCppWasm)
