import DB from 'nedb-promise';

export default (inMemoryOnly = false) => {

  if (inMemoryOnly) {
    return {
      recipes: new DB({ inMemoryOnly })
    };
  }

  return {
    recipes: new DB({ filename: `${__dirname}/data/recipes.db`, autoload: true })
  }
};
