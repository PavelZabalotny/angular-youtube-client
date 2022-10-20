import { dateValidation } from './date-validation.directive'

describe('DateValidation', () => {
  it('should create an instance', () => {
    const directive = dateValidation()
    expect(directive).toBeTruthy()
  })
})
