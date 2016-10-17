import { SbaPage } from './app.po';

describe('sba App', function() {
  let page: SbaPage;

  beforeEach(() => {
    page = new SbaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
