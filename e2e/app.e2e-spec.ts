import { FileSenderPage } from './app.po';

describe('file-sender App', function() {
  let page: FileSenderPage;

  beforeEach(() => {
    page = new FileSenderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
