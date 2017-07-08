import { OurprojectPage } from './app.po';

describe('ourproject App', () => {
  let page: OurprojectPage;

  beforeEach(() => {
    page = new OurprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
