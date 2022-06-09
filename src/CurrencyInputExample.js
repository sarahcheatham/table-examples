import { CurrencyInput } from "@aeros-ui/components";
import { useState } from 'react';

const CurrencyInputExample = () => {
    const [currencyValue, setCurrencyValue] = useState();
    console.log("CURRENCY VALUE:", currencyValue)
    return (
      <CurrencyInput
        label="Premium"
        value={currencyValue}
        onChange={(event, value) => setCurrencyValue(value)}
      />
    )
}

export default CurrencyInputExample;