import { getSample } from '../services/sampleService';

test('getSample returns correct object', () => {
  const sample = getSample();
  expect(sample).toEqual({ id: 1, name: 'Sample' });
});
