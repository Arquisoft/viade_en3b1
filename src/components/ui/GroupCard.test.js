import GroupCard from './GroupCard';
import Group from '../../entities/Group';
import { render, fireEvent, getByTestId } from '@testing-library/react';

var group1 = new Group("Grupo1", ["url1", "url2"]);

test('Define GroupCard', () => {
  expect(GroupCard).toBeDefined();
});

test('Renders correctly', () => {
  const wrapper = render(<GroupCard group={group1} />);
  expect(wrapper).toMatchSnapshot();
});

test('Click on expand', () => {
    const { container } = render(<GroupCard group={group1}/>);

    const button = getByTestId(container, 'btn-expand-test');
    fireEvent.click(button);
});