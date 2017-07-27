import { AslamMeanAppPage } from './app.po';

describe('aslam-mean-app App', () => {
  let page: AslamMeanAppPage;

  beforeEach(() => {
    page = new AslamMeanAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
