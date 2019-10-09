import React from 'react';

import MainPanel from '../MainPanel/MainPanel';
import SidePanel from '../SidePanel/SidePanel';
import Class from '../Class/Class';

export default class Layout extends React.Component {
 render() {
    return(
      <div>
        <SidePanel/>
         <Class/>

      </div>
    );
  }
}
