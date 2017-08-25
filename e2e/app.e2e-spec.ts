import { PokemonMastersClubPage } from './app.po';

describe('pokemon-masters-club App', () => {
  let page: PokemonMastersClubPage;

  beforeEach(() => {
    page = new PokemonMastersClubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
