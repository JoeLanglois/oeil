<p align="center">
  <img src="https://www.publicdomainpictures.net/pictures/260000/nahled/eye-illustration-clipart.jpg" width="300" style="margin:auto;"/> 
</p>

<h1 align="center">Oeil</h1>
<p align="center"><i>Build DOM nodes using arrays (lisp-style)</i></p>

<h2>📦 Installation</h2>

To install: ```npm i --save oeil```

Or use directly with es modules: 

```import {view, refs} from 'https://unpkg.com/oeil?module'```


...Or import as a normal js file 

```<script src="https://unpkg.com/oeil"></script>```

<h2>⚽️ Usage</h2>

```javascript 
  import {view, refs} from 'https://unpkg.com/oeil?module'

  // Construct a dom tree using arrays and functions
  let tree = view(['div.pa3.avenir'
    , ['h1#greeting.red', 'Hello World!']
    , ['p.subtitle', 'How are we doing today?']
  ])

  // Just use it (it's a vanilla DOM node)
  document.body.append(tree)

  // Get references to any node that has an id
  const {greeting} = refs(tree)

  setTimeout(_ => {
    greeting.classList.remove('red')
    greeting.classList.add('green')
  }, 700)

  
```

**Demo:** [Try it live!](https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgAsAXLKEAGhAGMB7NYmBvEAXwvW10QICsEqdBk2J4IWAA60ATsQAEwAG4QYAdwpzpMMHFZyw02ljkByEsQlxEAemsBXNBIDWAc3x0s12jGgB+LLQAJnawJgA6aBG2cgDC9HDE0nbU8hhygUZyiTAwcnZwEGguchjS0hgAnnAlaIH6DikQ8RGw8tm5ALxyymoAFMgmgRCK+BIYAMz4GIpMENLhaHJyGgOEAIwAxC5aMMSFblqBJhomABIwUFC0cgDqMlCBAIQmALoRSysmEvhwdgBGe2IoROp1oqhKWjkqlyGX2WSClV8rwiLwAlBEotY5AApfLyfK5CDyXpEkzVNKKDBoaBQNIAEQA8gBZORoIIwdG1WjUOw4Bj4P5BCpTCQSJiBXrtTmYuQAcV2mm0MC0aGo8HhNQqrPZWUIGHkevJiwggQiQgSCm2OT2RT0XS0OklO2laDguwAKuIYLQ7MRegB9OQdAB8Cnecitu327lpcDgABkIAl8FoAjNeiZDiZOUtIza3NRYwmk8QpoEJSZI2hsxF2HIAOwABkbLqWlBAbtgjXieDWAA5EI2ALSNwdsDggTA4PDuOPtoSMZg8NgvKhQQpOBAoTjTnjEDDUQgVHtUOzScg8cyWGz2RyudxGaz7w-H10AAQALPg1mtv9ZqHGT4Hke8SzgIIDEBUYp4AkFSwCurBAA)
