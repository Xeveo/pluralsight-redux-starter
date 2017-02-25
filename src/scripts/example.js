import React from 'react';

import Card from 'Components/containers/card';

import Search from 'Components/inputs/search';
import Toggler from 'Components/inputs/toggler';


const Export = () => (
  <div>
    <div className="flex-container justify-end">
      <Search />
    </div>
    <Card>
      <Toggler disabled label="Disabled" />
      <Toggler disabled checked label="Disabled" />
      <Toggler checked label="On or Off?" />
    </Card>
  </div>
);

export default Export;
