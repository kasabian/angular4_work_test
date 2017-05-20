import { AngularTestWorkPage } from './app.po';

describe('angular-test-work App', function() {
  let page: AngularTestWorkPage;

  beforeEach(() => {
    page = new AngularTestWorkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
