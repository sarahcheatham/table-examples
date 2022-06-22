import React from "react"
import PropTypes from "prop-types"
import AutoNumeric from "autonumeric"
import { withStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';

const styles = theme => ({
    textField: {
        textAlign: 'end'
    }
})

/**
 * PercentageInput is a [react](https://reactjs.org/) component with automated currency and number format, and with [Material-ui](https://material-ui.com/) look and feel.
 *
 * PercentageInput is a wrapper component for <a href="https://github.com/autoNumeric/autoNumeric">autonumeric</a> and based on <a href="https://github.com/mkg0/react-numeric">react-numeric</a>.
 *
 * Main features:
 * * Adds thousands separator automatically.
 * * Adds automatically the decimals on blur.
 * * Smart input. User can only type the accepted characters depending on the current value.
 * * Lots of config options...
 * * It accepts all the `props` and `classes` of Material-Ui <a href="https://mui.com/api/text-field/">TextField API</a> (Ex: classes, label, helperText, variant).
 * * And also all the `options` from <a href="http://autonumeric.org/guide">AutoNumeric</a>
 */

class RatioInput extends React.Component {
  constructor(props) {
    super(props)
    this.getValue = this.getValue.bind(this)
    this.callEventHandler = this.callEventHandler.bind(this)
  }

  componentDidMount() {
    const { currencySymbol, ...others } = this.props
    this.autonumeric = new AutoNumeric(this.input, this.props.value, {
      ...this.props.preDefined,
      ...others,
      onChange: undefined,
      onFocus: undefined,
      onBlur: undefined,
      onKeyPress: undefined,
      onKeyUp: undefined,
      onKeyDown: undefined,
      watchExternalChanges: false,
    })
  }
  componentWillUnmount() {
    this.autonumeric.remove()
  }

  componentDidUpdate(prevProps){
    const isValueChanged = prevProps.value !== this.props.value && this.getValue() !== this.props.value
    if(isValueChanged){
      this.autonumeric.set(this.props.value)
    }
  }

  getValue() {
    if (!this.autonumeric) return
    const valueMapper = {
      string: numeric => numeric.getNumericString(),
      number: numeric => numeric.getNumber(),
    }
    return valueMapper[this.props.outputFormat](this.autonumeric)
  }
  callEventHandler(event, eventName) {
    if (!this.props[eventName]) return
    this.props[eventName](event, this.getValue())
  }
  render() {
    const {
      classes,
      currencySymbol,
      inputProps,
      InputProps,
      ...others
    } = this.props

    const otherProps = {}
    ;[
      "id",
      "label",
      "className",
      "autoFocus",
      "color",
      "style",
      "error",
      "disabled",
      "type",
      "name",
      "defaultValue",
      "tabIndex",
      "fullWidth",
      "rows",
      "select",
      "required",
      "helperText",
      "unselectable",
      "margin",
      "SelectProps",
      "multiline",
      "size",
      "width",
      "FormHelperTextProps",
    ].forEach(prop => (otherProps[prop] = this.props[prop]))

    return (
      <TextField
        variant="standard"
        placeholder="0.000000"
        color={this.props.color ? this.props.color : "primary"}
        sx={{ 
          width: this.props.width,
          '& .MuiInputBase-root': {
            '&:before': {
                borderBottom: this.props.color === 'info' ? '1px solid #0097FB' : undefined,
            },
            '&:hover:not(.Mui-disabled):before': {
                borderBottom: this.props.color === 'info' ? '2px solid #0097FB' : undefined,
            }
          },
        }}
        inputRef={ref => (this.input = ref)}
        onChange={e => this.callEventHandler(e, "onChange")}
        onFocus={e => this.callEventHandler(e, "onFocus")}
        onBlur={e => this.callEventHandler(e, "onBlur")}
        onKeyPress={e => this.callEventHandler(e, "onKeyPress")}
        onKeyUp={e => this.callEventHandler(e, "onKeyUp")}
        onKeyDown={e => this.callEventHandler(e, "onKeyDown")}
        InputProps={{
          ...InputProps,
        }}
        inputProps={{
          className: classes.textField,
          ...inputProps,
          input: {
              textAlign: "end"
          }
        }}
        {...otherProps}
      />
    )
  }
}

RatioInput.propTypes = {
  type: PropTypes.oneOf(["text", "tel", "hidden"]),
  /** The variant to use. */
  variant: PropTypes.string,
  id: PropTypes.string,
  /** The CSS class name of the wrapper element. */
  className: PropTypes.string,
  /** Inline styling for element */
  style: PropTypes.object,
  /** If true, the input element will be disabled. */
  disabled: PropTypes.bool,
  /** The label content. */
  label: PropTypes.string,
  /** Align the numbers in the textField.
   * If you pass the `inputProps` from TextFieldAPI text align won't work.
   * then, you have handle it by className with your own class inside inputProps.
   */
  textAlign: PropTypes.oneOf(["end", "right", "left", "center"]),
  /** Tab index for the element */
  tabIndex: PropTypes.number,
  /** If true, the input element will be focused during the first mount. */
  autoFocus: PropTypes.bool,
  /** The short hint displayed in the input before the user enters a value. */
  placeholder: PropTypes.string,
  /** value to be enter and display in input */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Callback fired when the value is changed. */
  onChange: PropTypes.func,
  /** Callback fired when focused on element. */
  onFocus: PropTypes.func,
  /** Callback fired on blur. */
  onBlur: PropTypes.func,
  /** Callback fired on key press. */
  onKeyPress: PropTypes.func,
  /** Callback fired on key press. */
  onKeyUp: PropTypes.func,
  /** Callback fired on key press. */
  onKeyDown: PropTypes.func,
  /** Defines the currency symbol string. */
  currencySymbol: PropTypes.string,
  /** Defines what decimal separator character is used. */
  decimalCharacter: PropTypes.string,
  /** Allow to declare an alternative decimal separator which is automatically replaced by `decimalCharacter` when typed. */
  decimalCharacterAlternative: PropTypes.string,
  /** Defines the default number of decimal places to show on the formatted value. */
  decimalPlaces: PropTypes.number,
  /** Defines how many decimal places should be visible when the element is unfocused null. */
  decimalPlacesShownOnBlur: PropTypes.number,
  /** Defines how many decimal places should be visible when the element has the focus. */
  decimalPlacesShownOnFocus: PropTypes.number,
  /** Defines the thousand grouping separator character */
  digitGroupSeparator: PropTypes.string,
  /** Controls the leading zero behavior   */
  leadingZero: PropTypes.oneOf(["allow", "deny", "keep"]),
  /** maximum value that can be enter */
  maximumValue: PropTypes.string,
  /** minimum value that can be enter */
  minimumValue: PropTypes.string,
  /** placement of the negitive and possitive sign symbols */
  negativePositiveSignPlacement: PropTypes.oneOf(["l", "r", "p", "s"]),
  /** Defines the negative sign symbol to use   */
  negativeSignCharacter: PropTypes.string,
  /** how the value should be formatted,before storing it */
  outputFormat: PropTypes.oneOf(["string", "number"]),
  /** Defines if the element value should be selected on focus. */
  selectOnFocus: PropTypes.bool,
  /** Defines the positive sign symbol to use. */
  positiveSignCharacter: PropTypes.string,
  /** Defines if the element should be set as read only on initialization. */
  readOnly: PropTypes.bool,
  /** predefined objects are available in <a href="https://www.nodenpm.com/autonumeric/4.5.1/detail.html#predefined-options">AutoNumeric</a>*/
  preDefined: PropTypes.object,
}

RatioInput.defaultProps = {
  type: "text",
  variant: "standard",
  currencySymbol: "%",
  outputFormat: "number",
  textAlign: "right",
  maximumValue: "100.000000",
  minimumValue: "0.000000",
  decimalPlaces: 6,
  decimalCharacter: ".",
}
export default withStyles(styles)(RatioInput)

export const predefinedOptions = AutoNumeric.getPredefinedOptions()