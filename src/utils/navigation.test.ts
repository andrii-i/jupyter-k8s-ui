import { describe, test, expect } from 'bun:test';
import { withNamespaceParam } from './navigation';

describe('withNamespaceParam', () => {
  test('appends ?namespace= to a bare path', () => {
    expect(withNamespaceParam('/', 'team-b')).toBe('/?namespace=team-b');
  });

  test('appends with & when the path already carries a query', () => {
    expect(withNamespaceParam('/?tab=all', 'team-b')).toBe('/?tab=all&namespace=team-b');
  });

  test('returns the path unchanged while the namespace is unresolved', () => {
    expect(withNamespaceParam('/workspace/a', undefined)).toBe('/workspace/a');
  });
});
