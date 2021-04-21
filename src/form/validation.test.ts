import { notEmpty, hasMaxLength, isEmailAddress, validate } from './validation'

describe('validation', () => {
  describe('notEmpty', () => {
    test('handle undefined value', () => {
      expect(notEmpty('some-validation-messages')(undefined)).toEqual('some-validation-messages')
    })
    test('handle string value', () => {
      expect(notEmpty('some-validation-messages')('some-string')).toEqual(undefined)
    })
    test('handle number value', () => {
      expect(notEmpty('some-validation-messages')(1)).toEqual(undefined)
    })
    test('handle undefined message', () => {
      expect(notEmpty()('some-string')).toEqual(undefined)
    })
  })

  describe('hasMaxLength', () => {
    test('handle undefined value', () => {
      expect(hasMaxLength('some-validation-messages')(1234)('some-valid-alue')).toEqual(undefined)
    })
    test('handle valid false', () => {
      expect(
        hasMaxLength((maxNumberOfCharacters) => `max ${maxNumberOfCharacters} chars`)(3)(
          'some-value',
        ),
      ).toEqual(`max 3 chars`)
    })
  })

  describe('isEmailAddress', () => {
    test('handle valid true', () => {
      expect(isEmailAddress('some-validation-messages')('some@valid.com')).toEqual(undefined)
    })
    test('handle undefined', () => {
      expect(isEmailAddress()()).toEqual(undefined)
    })
    test('handle valid false', () => {
      expect(isEmailAddress('Validation error')('some-invalid-value')).toEqual('Validation error')
    })
  })

  describe('validate', () => {
    test('empty validation', () => {
      expect(validate({})({})).toEqual({})
      expect(validate({})({ test: 'some-value-to-validate' })).toEqual({})
    })
    test('with one rule', () => {
      const mockValidationRule = () => () => 'validationError!'
      const ruleSet = validate({ test: [mockValidationRule()] })
      expect(ruleSet({})).toEqual({
        test: 'validationError!',
      })
    })
    test('with multiple rules', () => {
      const mockValidationRule1 = () => () => undefined
      const mockValidationRule2 = () => () => 'validationError!!'
      const ruleSet = validate({ test: [mockValidationRule1(), mockValidationRule2()] })
      expect(ruleSet({})).toEqual({
        test: 'validationError!!',
      })
    })
    test('with multiple values', () => {
      const mockValidationRule1 = () => () => 'validationError!'
      const mockValidationRule2 = () => () => 'validationError!!'
      const ruleSet = validate({
        valueOne: [mockValidationRule1()],
        valueTwo: [mockValidationRule2()],
      })
      expect(ruleSet({})).toEqual({
        valueOne: 'validationError!',
        valueTwo: 'validationError!!',
      })
    })
    test('with multiple values with both fail and pass', () => {
      const mockValidationRule1 = () => () => 'validationError!'
      const mockValidationRule2 = () => () => undefined
      const mockValidationRule3 = () => () => 'validationError!!'
      const ruleSet = validate({
        valueOne: [mockValidationRule1()],
        valueTwo: [mockValidationRule2()],
        valueThree: [mockValidationRule3()],
      })
      expect(ruleSet({})).toEqual({
        valueOne: 'validationError!',
        valueTwo: undefined,
        valueThree: 'validationError!!',
      })
    })
  })
})
