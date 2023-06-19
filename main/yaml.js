
import { stringToBytes } from "https://deno.land/x/binaryify@2.0.0.0/tools.js"

import binaryStringForYamlWasm from "./raw_code/yaml.wasm.binaryified.js"
export default stringToBytes(binaryStringForYamlWasm)
