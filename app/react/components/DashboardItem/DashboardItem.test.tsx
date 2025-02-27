import { User } from 'lucide-react';
import { render } from '@testing-library/react';

import { DashboardItem } from './DashboardItem';

test('should show provided resource value', async () => {
  const { getByLabelText } = renderComponent(1);
  const value = getByLabelText('value');

  expect(value).toBeVisible();
  expect(value).toHaveTextContent('1');
});

test('should show provided resource type', async () => {
  const { getByLabelText } = renderComponent(0, User, 'Test');
  const title = getByLabelText('resourceType');

  expect(title).toBeVisible();
  expect(title).toHaveTextContent('Test');
});

test('should have accessibility label created from the provided resource type', async () => {
  const { getByLabelText } = renderComponent(0, User, 'testLabel');

  expect(getByLabelText('testLabel')).toBeTruthy();
});

function renderComponent(value = 0, icon = User, type = '') {
  return render(
    <DashboardItem value={value} icon={icon} type={type} dataCy="example" />
  );
}
