
import { stringToBytes } from "https://deno.land/x/binaryify@2.0.0.0/tools.js"

import binaryStringForTypescriptWasm from "./raw_code/typescript.wasm.binaryified.js"
export default stringToBytes(binaryStringForTypescriptWasm)
