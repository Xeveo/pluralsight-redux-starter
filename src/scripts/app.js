import React from 'react';
import ReactDOM from 'react-dom';

import Card from 'Components/containers/card';

import Search from 'Components/inputs/search';
import Toggler from 'Components/inputs/toggler';


export class SandboxApp {
  static mount(domNode) {
    ReactDOM.render((
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
    ), domNode);
  }
}
