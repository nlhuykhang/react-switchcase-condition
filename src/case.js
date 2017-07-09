import React, { Component } from 'react';

export default class Case extends Component {
  render() {}
}

/*

ok what is the problem here?

Should comopnent be rendered by Case or Switch?

I think it should be Case right?

If so what does Switch do??

I am think about:

<Switch>
  <Case cond={} component={} />
</Switch>


hmmm, maybe Switch will need to look into its children to determine
which one get rendered, also to delay render

*/
