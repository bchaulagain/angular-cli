import { <%= utils.classify(name) %>Page } from './app.po';

describe('<%= utils.dasherize(name) %> App', () => {
  let page: <%= utils.classify(name) %>Page;

  beforeEach(() => {
    page = new <%= utils.classify(name) %>Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to <%= prefix %>!');
  });
});
