import Test from 'ava';
import Db from '../../src/db';
import Services from '../../src/services';

Test.beforeEach(t => {
  t.context = Services(Db(true));
});

Test(`#all(predicate) gets all the recipes`, async t => {
  const { recipes } = t.context;
  const results = await recipes.all();
  t.deepEqual(results, []);
});


Test(`#onepredicate, projection) gets a recipe`, async t => {
  const { recipes } = t.context;
  await recipes.save({ hello: 'world' });
  const recipe = await recipes.one({});

  t.deepEqual(recipe.hello, 'world');
});

