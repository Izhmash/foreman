import { shallow } from '@theforeman/test';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import immutable from 'seamless-immutable';

import StatisticsChartsList from './';
import { statisticsData } from './StatisticsChartsList.fixtures';

const mockStore = configureMockStore([thunk]);

describe('StatisticsChartsList', () => {
  it('should render no panels for empty data', () => {
    const store = mockStore({
      statistics: immutable({ charts: [] }),
    });
    const wrapper = shallow(
      <StatisticsChartsList store={store} data={statisticsData} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render two panels for fixtures data', () => {
    const store = mockStore({
      statistics: immutable({ charts: statisticsData }),
    });

    const wrapper = shallow(
      <StatisticsChartsList store={store} data={statisticsData} />
    );

    expect(wrapper.render().find('.chart-box')).toHaveLength(2);
  });
});
