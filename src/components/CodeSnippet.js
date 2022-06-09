
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { dracula, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('jsx', jsx);


const CodeSnippet = props => {
  return (
        <SyntaxHighlighter 
          style={coy} 
          language="jsx"
          wrapLongLines
          customStyle={{
            fontSize: "0.9rem"
          }}
        >
            {props.codeString}
        </SyntaxHighlighter>
  );
};

export default CodeSnippet;