import fs from 'fs/promises'
import path from 'path'

import url from 'blob-url:~/src/assets/localizations/english/english.xml'

import ExampleLibrary from '~/src/libs/ExampleLibrary.js'
import { formatAsTitle } from '~/src/utils/text.js'

const setup = async (): Promise<void> => {
  console.log(formatAsTitle('program LOADED'))
  console.log('dirname: ', __dirname)

  const exampleLib = new ExampleLibrary()
  const data = await fs.readFile(
    path.join(__dirname, 'assets/localizations/english/english.xml'),
    'utf8'
  )

  exampleLib.sayHello()

  console.log('xml url: ', url)
  console.log('xml data: ', data)
}

void setup()
