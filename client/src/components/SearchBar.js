import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

function SearchBar() {
  return (
    <Form inline className="mt-2" action="/search">
      <FormGroup className="mb-sm-0 flex-grow-1">
        <Input type="text" name="title" id="searchField" placeholder="Search Actors, Movies, TV Show ..."  className="w-100"/>
      </FormGroup>
      <Button><i class="fas fa-search"></i></Button>
    </Form>
  )
}

export default SearchBar
