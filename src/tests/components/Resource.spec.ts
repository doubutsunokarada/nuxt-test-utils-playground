import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Resource from '../../components/Resource.vue';

describe('コンポーネントのテスト', () => {
  test('検索', () => {
    const result = [
      {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        gender: 'Male',
        email: 'xxxx.xxx@xxxxxxx',
      },
    ];
    const wrapper = mount(Resource, {
      props: {
        personList: result,
      },
    });
    expect(wrapper.text()).toContain('"id": 1');
    expect(wrapper.text()).toContain('"first_name": "John"');
    expect(wrapper.text()).toContain('"last_name": "Doe"');
    expect(wrapper.text()).toContain('"gender": "Male"');
    expect(wrapper.text()).toContain('"email": "xxxx.xxx@xxxxxxx"');
  });
});
