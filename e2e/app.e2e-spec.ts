import { KendoAngularItunesPage } from './app.po';

describe('kendo-angular-itunes App', () => {
  let page: KendoAngularItunesPage;

  beforeEach(() => {
    page = new KendoAngularItunesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
