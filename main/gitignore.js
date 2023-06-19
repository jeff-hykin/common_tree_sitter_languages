
import { stringToBytes } from "https://deno.land/x/binaryify@2.0.0.0/tools.js"

import binaryStringForGitignoreWasm from "./raw_code/gitignore.wasm.binaryified.js"
export default stringToBytes(binaryStringForGitignoreWasm)
