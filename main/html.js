
import { stringToBytes } from "https://deno.land/x/binaryify@2.0.0.0/tools.js"

import binaryStringForHtmlWasm from "./raw_code/html.wasm.binaryified.js"
export default stringToBytes(binaryStringForHtmlWasm)
