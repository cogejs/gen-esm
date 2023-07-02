import {Template} from '@coge/generator';

import AppTemplate = require('../app');

describe('esm/app', () => {
  it('should be a template', () => {
    expect(new AppTemplate({})).toBeInstanceOf(Template);
  });
});
