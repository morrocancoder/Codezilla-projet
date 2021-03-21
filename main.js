rawCode = `let x = 35
const str = "hello world"

function fun() {
   
  // " this is a comment "
  
  }
  console.log('regular expression')
  fun()
  fun("x")
  alert("end")`

codeNode = $(".code")

lineNumberNode = document.querySelector(".line_number")

// analyse raw code
function analyseCode(codeString) {
   let css_class = "code_lightblue"
   let x = ""
   let pattern = /let|var|const|function|console\.log|(\/\/.*)|(".*")|'.*'|\w+\("\w+"\)/g
   let codeAnalysed = codeString.replace(pattern, str => {
      if (str.match(/\/\//)) {
         css_class = "code_comment"
         str = `<span class="${css_class}">${str}</span>`
         return str
      }
     else if (str.match(/"|'/)) {
         css_class = "code_string"
         str = `<span class="${css_class}">${str}</span>`
         return str
      }
      else if(str.match(/\(/))
      {
         alert(str)
         css_class = "code_lightblue"
         str = `<span class="${css_class}">${str}</span>`
         return str
      }
      else if (str.includes("log"))
      {
         css_class = "code_lightblue"
         str = str.replace("log", `<span class="${css_class}">log</span>`)
         return str
      }
      //else if(str.includes)
      else
         return `<span class="${css_class}">${str}</span>`
   })
   return codeAnalysed
}
let codeAnalysed = analyseCode(rawCode)
codeNode.html(codeAnalysed)
let lineNumber = ""
let h = codeNode.height()
// calcul  toatal numbers line based on height of code

let numOfLine = Math.floor(h / 24)
for (let k = 0; k < numOfLine; k++)
   lineNumber += `<div>${k}</div>`

lineNumberNode.innerHTML = lineNumber