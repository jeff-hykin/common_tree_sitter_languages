# What is this?

Its a central place for tree sitter wasm files that can be imported synchonously as javascript.

# How do I use it?

```js
import javascript from "https://deno.land/x/common_tree_sitter_languages@1.0.0.1/main/javascript.js"
import { parserFromWasm } from "https://deno.land/x/deno_tree_sitter@0.0.4/main.js"

const javascriptParser = (await parserFromWasm(javascript))
javascriptParser.parse("let a = 10;")
```

# What languages are supported?

```js
import c from "https://deno.land/x/common_tree_sitter_languages@1.0.0.1/main/c.js"
import cpp from "https://deno.land/x/common_tree_sitter_languages@1.0.0.1/main/cpp.js"
import css from "https://deno.land/x/common_tree_sitter_languages@1.0.0.1/main/css.js"
import gitignore from "https://deno.land/x/common_tree_sitter_languages@1.0.0.1/main/gitignore.js"
import html from "https://deno.land/x/common_tree_sitter_languages@1.0.0.1/main/html.js"
import javascript from "https://deno.land/x/common_tree_sitter_languages@1.0.0.1/main/javascript.js"
import json from "https://deno.land/x/common_tree_sitter_languages@1.0.0.1/main/json.js"
import nix from "https://deno.land/x/common_tree_sitter_languages@1.0.0.1/main/nix.js"
import python from "https://deno.land/x/common_tree_sitter_languages@1.0.0.1/main/python.js"
import rust from "https://deno.land/x/common_tree_sitter_languages@1.0.0.1/main/rust.js"
import toml from "https://deno.land/x/common_tree_sitter_languages@1.0.0.1/main/toml.js"
import tsx from "https://deno.land/x/common_tree_sitter_languages@1.0.0.1/main/tsx.js"
import typescript from "https://deno.land/x/common_tree_sitter_languages@1.0.0.1/main/typescript.js"
import wast from "https://deno.land/x/common_tree_sitter_languages@1.0.0.1/main/wast.js"
import wat from "https://deno.land/x/common_tree_sitter_languages@1.0.0.1/main/wat.js"
import yaml from "https://deno.land/x/common_tree_sitter_languages@1.0.0.1/main/yaml.js"
```
