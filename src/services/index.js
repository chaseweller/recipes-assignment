import recipes from './recipes';

export default db => {

  return { recipes: recipes(db) };

}
