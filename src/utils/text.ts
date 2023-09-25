import startCase from 'lodash/startCase.js'
import toLower from 'lodash/toLower.js'

export const formatAsTitle = (str: string): string => {
  return startCase(toLower(str))
}
