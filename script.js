const {marked} = marked

const defaultCode = `
# Welcome to the Markdown Previewer!
## Markdown Features Showcase

**Bold text** and _italic text_ can be combined for **_bold and italic_**.

### Links
A standard [link to GitHub](https://github.com).

### Images
An image from the web:
![Pikachu](https://raw.githubusercontent.com/Ayoub-Younes/build-a-pokemon-search-app/master/imgs/Pokemons_Images/pikachu.png)

### Inline Code
Inline code: console.log('Hello, world!');

### Code Blocks
\`\`\`javascript
// JavaScript code block
function greet(name) {
  console.log(\`Hello, ${name}!\`);
}
greet('Markdown');
\`\`\`

### Lists
- Unordered list item 1
  - Nested item
  - Nested item
- Unordered list item 2

1. Ordered list item 1
2. Ordered list item 2

### Blockquotes
> \"Markdown is awesome!\" – Someone, probably

### Tables
| Feature       | Supported   |
| ------------- |:-----------:|
| Bold          | Yes         |
| Italics       | Yes         |
| Code Blocks   | Yes         |
| Tables        | Definitely! |

### Horizontal Rule
---

### Task List
- [x] Write some Markdown
- [x] Preview it
- [ ] Celebrate!
`
;
const App = () => {
  const [input, setInput] = React.useState(defaultCode);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="container">
        <div className="editor">
            <div className="title">Editor</div> 
            <textarea id="editor" cols="70" rows="14" value={input} onChange={handleChange}></textarea>
        </div>
            <div className="preview">
            <div className="title">Preview</div> 
            <div id="preview"dangerouslySetInnerHTML={{ __html: marked(input, { breaks: true }) }}></div>
        </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
