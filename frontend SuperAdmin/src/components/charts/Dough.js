import React, { PureComponent } from 'react';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default class Example extends PureComponent {
   

  render() {
    const value = 0.66;
    return (
<div style={{ width: 200, height: 200 }}>


<CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} />;
</div>
    );
  }
}
