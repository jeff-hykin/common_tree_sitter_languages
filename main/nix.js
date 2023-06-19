
import { stringToBytes } from "https://deno.land/x/binaryify@2.0.0.0/tools.js"

import binaryStringForNixWasm from "./raw_code/nix.wasm.binaryified.js"
export default stringToBytes(binaryStringForNixWasm)
