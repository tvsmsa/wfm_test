import { useState } from 'react';

export default function useValidationInput(validationChecker: (value: string) => boolean | RegExpMatchArray | null,
  errorMessage: string) {
  const [value, setValue] = useState('');
  const [valueError, setValueError] = useState('');
  const processValueValidation = () => {
    const isValueCorrect = validationChecker(value);
    setValueError(isValueCorrect ? '' : errorMessage);
    return !!isValueCorrect;
  };
  return [value, setValue, valueError, processValueValidation] as const;
}
