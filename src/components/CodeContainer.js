import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CodeIcon from '@mui/icons-material/Code';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import CodeSnippet from './CodeSnippet';

const CodeContainer = props => {
  const [showCode, setShowCode] = useState(false);
  const [copySuccess, setCopy] = useState(false);

  const handleToggleCode = () => {
    setShowCode(!showCode)
  };

  const copyToClipboard = str => {
    const el = document.createElement("textarea") // Create a <textarea> element
    el.value = str // Set its value to the string that you want copied
    el.setAttribute("readonly", "") // Make it readonly to be tamper-proof
    el.style.position = "absolute"
    el.style.left = "-9999px" // Move outside the screen to make it invisible
    document.body.appendChild(el) // Append the <textarea> element to the HTML document
    const selected =
      document.getSelection().rangeCount > 0 // Check if there is any content selected previously
        ? document.getSelection().getRangeAt(0) // Store selection if found
        : false // Mark as false to know no selection existed before
    el.select() // Select the <textarea> content
    document.execCommand("copy") // Copy - only works as a result of a user action (e.g. click events)
    setCopy(true);
    document.body.removeChild(el) // Remove the <textarea> element
    if (selected) {
      // If a selection existed before copying
      document.getSelection().removeAllRanges() // Unselect everything on the HTML document
      document.getSelection().addRange(selected) // Restore the original selection
    }
  }

    return (
        <Grid container sx={{ px: '1em' }}>
          <Grid item container justifyContent="flex-end">
              <Tooltip placement="bottom" title={showCode ? "hide source code" : "show source code"}>
                <IconButton 
                  onClick={() => handleToggleCode()}
                >
                  <CodeIcon/>
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item container component={Paper} sx={{ px: '1em'}}>
                <Collapse in={showCode}>
                  <Grid item container columnGap={3} sx={{ pt: '1em' }} alignItems="center">
                    <Grid item>
                      <Typography variant="subtitle2">{props.title}</Typography>
                    </Grid>
                    <Grid item>
                      <Tooltip leaveDelay={copySuccess ? 1500 : 0} placement="bottom" title={copySuccess ? "copied to clipboard" : "copy source code"}>
                        <IconButton onClick={() => copyToClipboard(props.codeString)} color={copySuccess ? "primary" : undefined}>
                          <ContentCopyIcon fontSize='small'/>
                        </IconButton>
                      </Tooltip>
                    </Grid>
                  </Grid>
                  <CodeSnippet codeString={props.codeString}/>
                </Collapse>
            </Grid>
        </Grid>
    );
}

export default CodeContainer;
