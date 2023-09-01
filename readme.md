# What is this?

Its a central place for tree sitter wasm files that can be imported synchonously as javascript.

# How do I use it?

```js
import javascript from "https://deno.land/x/common_tree_sitter_languages@1.0.0.3/main/javascript.js"
import { parserFromWasm } from "https://deno.land/x/deno_tree_sitter@0.0.4/main.js"

const javascriptParser = (await parserFromWasm(javascript))
javascriptParser.parse("let a = 10;")
```

# What languages are supported?

```js
import html from "https://deno.land/x/common_tree_sitter_languages@1.0.0.3/main/html.js"
import c from "https://deno.land/x/common_tree_sitter_languages@1.0.0.3/main/c.js"
import python from "https://deno.land/x/common_tree_sitter_languages@1.0.0.3/main/python.js"
import typescript from "https://deno.land/x/common_tree_sitter_languages@1.0.0.3/main/typescript.js"
import yaml from "https://deno.land/x/common_tree_sitter_languages@1.0.0.3/main/yaml.js"
import javascript from "https://deno.land/x/common_tree_sitter_languages@1.0.0.3/main/javascript.js"
import rust from "https://deno.land/x/common_tree_sitter_languages@1.0.0.3/main/rust.js"
import css from "https://deno.land/x/common_tree_sitter_languages@1.0.0.3/main/css.js"
import json from "https://deno.land/x/common_tree_sitter_languages@1.0.0.3/main/json.js"
import wat from "https://deno.land/x/common_tree_sitter_languages@1.0.0.3/main/wat.js"
import wast from "https://deno.land/x/common_tree_sitter_languages@1.0.0.3/main/wast.js"
import tsx from "https://deno.land/x/common_tree_sitter_languages@1.0.0.3/main/tsx.js"
import toml from "https://deno.land/x/common_tree_sitter_languages@1.0.0.3/main/toml.js"
import nix from "https://deno.land/x/common_tree_sitter_languages@1.0.0.3/main/nix.js"
import cpp from "https://deno.land/x/common_tree_sitter_languages@1.0.0.3/main/cpp.js"
import gitignore from "https://deno.land/x/common_tree_sitter_languages@1.0.0.3/main/gitignore.js"
import treeSitterQuery from "https://deno.land/x/common_tree_sitter_languages@1.0.0.3/main/tree-sitter-query.js"
```
