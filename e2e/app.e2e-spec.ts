import { AppPage } from './app.po';

describe('ng-custom-timeline App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Not available yet :(');
    });
});
