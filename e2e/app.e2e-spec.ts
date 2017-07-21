import { TallerAppPage } from './app.po';

describe('taller-app App', () => {
  let page: TallerAppPage;

  beforeEach(() => {
    page = new TallerAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
