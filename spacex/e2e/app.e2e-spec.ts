import { SpacexPage } from './app.po';

describe('spacex App', function() {
  let page: SpacexPage;

  beforeEach(() => {
    page = new SpacexPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
