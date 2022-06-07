import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CodeIcon from '@mui/icons-material/Code';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import CodeSnippet from './CodeSnippet';

const CodeContainer = props => {
  const [showCode, setShowCode] = useState(false);

  const handleToggleCode = () => {
    setShowCode(!showCode)
  };

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
                  <Typography variant="subtitle2" sx={{ pt: '1em' }}>{props.title}</Typography>
                  <CodeSnippet codeString={props.codeString}/>
                </Collapse>
            </Grid>
        </Grid>
    );
}

export default CodeContainer;
