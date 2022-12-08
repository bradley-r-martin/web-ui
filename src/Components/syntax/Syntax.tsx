import React, { FunctionComponent } from 'react'

interface DebugProps {
  json: any
}

export function syntaxHighlight(json: any) {
  if (typeof json != 'string') {
    json = JSON.stringify(json, undefined, 2)
  }
  if (json === undefined) {
    return '<span class="null">null</span>'
  }
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
    function (match: any) {
      let cls = 'number'
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'key'
        } else {
          cls = 'string'
        }
      } else if (/true|false/.test(match)) {
        cls = 'boolean'
      } else if (/null/.test(match)) {
        cls = 'null'
      }
      return '<span class="' + cls + '">' + match + '</span>'
    },
  )
}

const Syntax: FunctionComponent<DebugProps> = (props) => {
  const { json } = props
  return (
    <div>
      <pre dangerouslySetInnerHTML={{ __html: syntaxHighlight(json) }}></pre>
    </div>
  )
}

export default Syntax
