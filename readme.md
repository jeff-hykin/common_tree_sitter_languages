# What is this?

Its a central place for tree sitter wasm files that can be imported synchonously as javascript.

# How do I use it?

```js
import javascript from "https://esm.sh/gh/jeff-hykin/common_tree_sitter_languages@1.3.3.0/main/javascript.js"
import { createParser } from "https://deno.land/x/deno_tree_sitter@1.0.1.0/main/main.js"

const javascriptParser = await createParser(javascript)
javascriptParser.parse("let a = 10;")
```

# What languages are supported?

```js
import html from "https://esm.sh/gh/jeff-hykin/common_tree_sitter_languages@1.3.3.0/main/html.js"
import c from "https://esm.sh/gh/jeff-hykin/common_tree_sitter_languages@1.3.3.0/main/c.js"
import python from "https://esm.sh/gh/jeff-hykin/common_tree_sitter_languages@1.3.3.0/main/python.js"
import bash from "https://esm.sh/gh/jeff-hykin/common_tree_sitter_languages@1.3.3.0/main/bash.js"
import typescript from "https://esm.sh/gh/jeff-hykin/common_tree_sitter_languages@1.3.3.0/main/typescript.js"
import yaml from "https://esm.sh/gh/jeff-hykin/common_tree_sitter_languages@1.3.3.0/main/yaml.js"
import javascript from "https://esm.sh/gh/jeff-hykin/common_tree_sitter_languages@1.3.3.0/main/javascript.js"
import rust from "https://esm.sh/gh/jeff-hykin/common_tree_sitter_languages@1.3.3.0/main/rust.js"
import css from "https://esm.sh/gh/jeff-hykin/common_tree_sitter_languages@1.3.3.0/main/css.js"
import json from "https://esm.sh/gh/jeff-hykin/common_tree_sitter_languages@1.3.3.0/main/json.js"
import wat from "https://esm.sh/gh/jeff-hykin/common_tree_sitter_languages@1.3.3.0/main/wat.js"
import wast from "https://esm.sh/gh/jeff-hykin/common_tree_sitter_languages@1.3.3.0/main/wast.js"
import tsx from "https://esm.sh/gh/jeff-hykin/common_tree_sitter_languages@1.3.3.0/main/tsx.js"
import toml from "https://esm.sh/gh/jeff-hykin/common_tree_sitter_languages@1.3.3.0/main/toml.js"
import nix from "https://esm.sh/gh/jeff-hykin/common_tree_sitter_languages@1.3.3.0/main/nix.js"
import cpp from "https://esm.sh/gh/jeff-hykin/common_tree_sitter_languages@1.3.3.0/main/cpp.js"
import gitignore from "https://esm.sh/gh/jeff-hykin/common_tree_sitter_languages@1.3.3.0/main/gitignore.js"
import treeSitterQuery from "https://esm.sh/gh/jeff-hykin/common_tree_sitter_languages@1.3.3.0/main/tree-sitter-query.js"
```

### How to add a new language

- If they've got a tree sitter repo, go there
- `npm install tree-sitter-cli`
- then one of these (depending on how old your/their installation is)
    - `npx tree-sitter build-wasm`
    - `npx tree-sitter-cli build-wasm`
    - `npx tree-sitter-cli build --wasm`
    - `tree-sitter build --wasm --output 'out.wasm'`
    - `npm run build`
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