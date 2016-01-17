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
      'compacted': {}
    };
  }

  static compact(data, cb) {
    jsonld.compact(data, context, cb);
  }

  componentDidMount() {
    let data = this.props.data;
    this.constructor.compact(data, (err, compacted) => {
      this.setState({
        'compacted': compacted
      });
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.compacted.name}</div>
        <div>{this.state.compacted.description}</div>
        <div>{this.state.compacted.url}</div>
        <div>{this.state.compacted.image}</div>
        <div>{this.state.compacted.additionalType}</div>
        <div>{this.state.compacted.alternateName}</div>
        <div>{this.state.compacted.mainEntityOfPage}</div>
        <div>{this.state.compacted.potentialAction}</div>
        <div>{this.state.compacted.sameAs}</div>
      </div>
    );
  }
}

export default MoshiThing;
