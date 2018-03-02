import { EHousingSystemPage } from './app.po';

describe('ehousing-system App', function() {
  let page: EHousingSystemPage;

  beforeEach(() => {
    page = new EHousingSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
