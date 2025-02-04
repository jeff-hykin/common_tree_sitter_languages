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
import html from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/a1c34a3a73a173f82657e25468efc76e9e593843/main/html.js"
import c from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/a1c34a3a73a173f82657e25468efc76e9e593843/main/c.js"
import python from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/a1c34a3a73a173f82657e25468efc76e9e593843/main/python.js"
import bash from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/a1c34a3a73a173f82657e25468efc76e9e593843/main/bash.js"
import typescript from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/a1c34a3a73a173f82657e25468efc76e9e593843/main/typescript.js"
import yaml from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/a1c34a3a73a173f82657e25468efc76e9e593843/main/yaml.js"
import javascript from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/a1c34a3a73a173f82657e25468efc76e9e593843/main/javascript.js"
import rust from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/a1c34a3a73a173f82657e25468efc76e9e593843/main/rust.js"
import css from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/a1c34a3a73a173f82657e25468efc76e9e593843/main/css.js"
import json from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/a1c34a3a73a173f82657e25468efc76e9e593843/main/json.js"
import wat from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/a1c34a3a73a173f82657e25468efc76e9e593843/main/wat.js"
import wast from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/a1c34a3a73a173f82657e25468efc76e9e593843/main/wast.js"
import tsx from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/a1c34a3a73a173f82657e25468efc76e9e593843/main/tsx.js"
import toml from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/a1c34a3a73a173f82657e25468efc76e9e593843/main/toml.js"
import nix from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/a1c34a3a73a173f82657e25468efc76e9e593843/main/nix.js"
import cpp from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/a1c34a3a73a173f82657e25468efc76e9e593843/main/cpp.js"
import gitignore from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/a1c34a3a73a173f82657e25468efc76e9e593843/main/gitignore.js"
import treeSitterQuery from "https://github.com/jeff-hykin/common_tree_sitter_languages/raw/a1c34a3a73a173f82657e25468efc76e9e593843/main/tree-sitter-query.js"
```


### How to add a new language

- If they've got a tree sitter repo, go there
- `npm install tree-sitter-cli`
- then one of these (depending on how old your/their installation is)
    - `npx tree-sitter build-wasm`
    - `npx tree-sitter-cli build-wasm`
    - `npx tree-sitter-cli build --wasm`
    - `tree-sitter build --wasm --output 'out.wasm'`
- thats the main step! there should now be a .wasm file somewhere in that project
- last kinda-optinal step:
    - if you're making a CLI tool, a web tool, or a library for others to use, you probably want the wasm file to be bundle-able
        - a quick way to do that is:
            - clone this repo
            - dump the .wasm file in main/
            - then type `run/generate` (on windows, mac, linux) in your terminal/console
            - it will generate a `yourLanguage.js` file, which is bundle-able, and contains all the data of the wasm file
        - a more proper way to automate this in your own project is to use [binaryify](https://github.com/jeff-hykin/binaryify)
            - there's a CLI version and a deno-api for it
            - all it does is convert files to a bundle-able form
    - else (if you're not making a CLI tool, web tool, or a library)
        - just use the .wasm file directly with tree-sitter-web