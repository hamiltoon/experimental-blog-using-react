import { isFunction, first, isNil, isString } from 'lodash/fp'

type Value = string | number | undefined

type Rule = (value?: Value) => String | undefined

type ErrorMessageFunction = (numOfChars: any) => string

type ErrorMessage = String

type MaybeValid = ErrorMessage | undefined

const valueIsEmpty: (value: any) => boolean = (value: Value) =>
  isNil(value) || (isString(value) && value.trim() === '')

export const notEmpty =
  (message?: ErrorMessage): Rule =>
  (value: Value) => {
    return valueIsEmpty(value) ? (!!message ? message : 'Need to be entered.') : undefined
  }

export const hasMaxLength =
  (message?: ErrorMessage | ErrorMessageFunction) =>
  (maxLength: number): Rule =>
  (value: Value) => {
    const actualMessage = isFunction(message) ? message(maxLength) : message
    const hasError = !valueIsEmpty(value) && isString(value) && value.length >= maxLength

    return hasError
      ? actualMessage
        ? actualMessage
        : `Need to be less than ${maxLength} characters`
      : undefined
  }

export const isEmailAddress =
  (message?: ErrorMessage): Rule =>
  (value: Value) => {
    const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    const hasError = !valueIsEmpty(value) && isString(value) && !EMAIL_REGEX.test(value)

    return hasError ? (message ? message : 'The email address is not valid') : undefined
  }

const runValidators = (currentRules: Rule[], value: Value) => {
  const allErrors = currentRules.map((validator) => validator(value)).filter((_) => _)
  return first(allErrors)
}

export const validate = <O, > (validationRules: Record<keyof O, Rule[]>) => (values: Record<string, Value>): Record<string, MaybeValid> => {
    return Object.entries<Rule[]>(validationRules).reduce( (acc, currentRuleSet) => {
      const [ruleKey, rules] = currentRuleSet
      const currentValue: Value = values[ruleKey]
      return {
        ...acc,
        [ruleKey]: runValidators(rules, currentValue),
      }
    }, {})
  }
