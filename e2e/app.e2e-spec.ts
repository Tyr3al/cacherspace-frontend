import { CacherSpaceTwoPage } from './app.po';

describe('cacher-space-two App', () => {
  let page: CacherSpaceTwoPage;

  beforeEach(() => {
    page = new CacherSpaceTwoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
