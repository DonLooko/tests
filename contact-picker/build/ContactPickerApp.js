import React from 'react';
import ReactDOM from 'react-dom';

import { ContactPicker } from '../src/index';

const ContactPickerApp = () => (
  <ContactPicker />
);

ReactDOM.render(
  <ContactPickerApp />,
  document.getElementById('contact-picker')
);
