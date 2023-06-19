
import { stringToBytes } from "https://deno.land/x/binaryify@2.0.0.0/tools.js"

import binaryStringForPythonWasm from "./raw_code/python.wasm.binaryified.js"
export default stringToBytes(binaryStringForPythonWasm)
