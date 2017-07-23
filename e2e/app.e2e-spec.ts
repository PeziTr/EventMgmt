import { PhotographersPage } from './app.po';

describe('photographers App', () => {
  let page: PhotographersPage;

  beforeEach(() => {
    page = new PhotographersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
