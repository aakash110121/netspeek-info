import { googleFormsToJson } from 'react-google-forms-hooks'

// can use both full and shortened form url
const result = await googleFormsToJson(
  // DEV
  // 'https://docs.google.com/forms/d/e/1FAIpQLScdq0mvACjwVhaVPB9YfKpwu0U_ZW4eCb7Jp_zbr9r8TFTAJw/viewform'

  // PROD
  'https://docs.google.com/forms/d/e/1FAIpQLSdVPfJbcBvLks3tux0ColcNDultt_7evvLY7RbGxOs2HY8xfg/viewform'
)

console.log(result)
// will output the form fields in an appropriate structure
// [
//   {
//     label: 'Do you want to give some feedback?',
//     type: 'LONG_ANSWER',
//     id: '1864908950',
//     required: false
//   },
//   ...
// ]