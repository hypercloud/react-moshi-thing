/**
 * @author    Junxiang Wei {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Junxiang Wei
 * @license   MIT
 */
'use strict';

import React from 'react';
import jsonld from 'jsonld';

const context = 'http://schema.org/';

class MoshiThing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'data': {}
    };
  }

  componentDidMount() {
    let thing = this.props.thing;
    jsonld.compact(thing, context, (err, compacted) => {
      this.setState({
        'data': compacted
      });
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.data.name}</div>
        <div>{this.state.data.jobTitle}</div>
        <div>{this.state.data.telephone}</div>
        <div>{this.state.data.url}</div>
      </div>
    );
  }
}

export default MoshiThing;
