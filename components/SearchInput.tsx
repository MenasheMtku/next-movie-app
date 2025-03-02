
import { Input } from './ui/input'
import Form from 'next/form'

function SearchInput() {

  return (
    <div>
      <Form action="/search">
        <Input placeholder='Search' name="query" type='text'/>
      </Form>
    </div>

  )
}

export default SearchInput
