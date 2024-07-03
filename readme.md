# What is this?

Its a central place for tree sitter wasm files that can be imported synchonously as javascript.

# How do I use it?

```js
import javascript from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/e2c125ea47a0eee2453f0cbe7ca8a8d19d04df03/main/javascript.js"
// the import below should work but doesnt at the moment
// import javascript from "https://deno.land/x/common_tree_sitter_languages@1.3.1.1/main/javascript.js"
import { parserFromWasm } from "https://deno.land/x/deno_tree_sitter@0.2.2.4/main.js"

const javascriptParser = (await parserFromWasm(javascript))
javascriptParser.parse("let a = 10;")
```

# What languages are supported?

```js
import html from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/e2c125ea47a0eee2453f0cbe7ca8a8d19d04df03/main/html.js"
import c from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/e2c125ea47a0eee2453f0cbe7ca8a8d19d04df03/main/c.js"
import python from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/e2c125ea47a0eee2453f0cbe7ca8a8d19d04df03/main/python.js"
import bash from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/e2c125ea47a0eee2453f0cbe7ca8a8d19d04df03/main/bash.js"
import typescript from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/e2c125ea47a0eee2453f0cbe7ca8a8d19d04df03/main/typescript.js"
import yaml from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/e2c125ea47a0eee2453f0cbe7ca8a8d19d04df03/main/yaml.js"
import javascript from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/e2c125ea47a0eee2453f0cbe7ca8a8d19d04df03/main/javascript.js"
import rust from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/e2c125ea47a0eee2453f0cbe7ca8a8d19d04df03/main/rust.js"
import css from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/e2c125ea47a0eee2453f0cbe7ca8a8d19d04df03/main/css.js"
import json from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/e2c125ea47a0eee2453f0cbe7ca8a8d19d04df03/main/json.js"
import wat from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/e2c125ea47a0eee2453f0cbe7ca8a8d19d04df03/main/wat.js"
import wast from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/e2c125ea47a0eee2453f0cbe7ca8a8d19d04df03/main/wast.js"
import tsx from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/e2c125ea47a0eee2453f0cbe7ca8a8d19d04df03/main/tsx.js"
import toml from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/e2c125ea47a0eee2453f0cbe7ca8a8d19d04df03/main/toml.js"
import nix from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/e2c125ea47a0eee2453f0cbe7ca8a8d19d04df03/main/nix.js"
import cpp from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/e2c125ea47a0eee2453f0cbe7ca8a8d19d04df03/main/cpp.js"
import gitignore from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/e2c125ea47a0eee2453f0cbe7ca8a8d19d04df03/main/gitignore.js"
import treeSitterQuery from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/e2c125ea47a0eee2453f0cbe7ca8a8d19d04df03/main/tree-sitter-query.js"
```


### How to add a new language

- If they've got a tree sitter repo, go there
- `npm install tree-sitter-cli`
- then one of these (depending on how old your installation is)
    - `npx tree-sitter build-wasm`
    - `npx tree-sitter-cli build-wasm`
    - `npx tree-sitter-cli build --wasm`
    - `tree-sitter build --wasm --output 'out.wasm'`
- thats generally it!