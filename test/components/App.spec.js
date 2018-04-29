import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'describe' to group together similar tests
describe('App Component', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  })

  it('should render the app header', () => {
    expect(component.find('.app-header')).to.exist;
  })

  it('should render a books list', () => {
    expect(component.find('section.books-list')).to.exist;
  })

})