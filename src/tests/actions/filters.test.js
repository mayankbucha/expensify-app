import moment from 'moment';
import {setStartDate, setEndDate, sortByAmount, sortByDate, setFilterText} from '../../actions/filters';

test('should generate setStartDate action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate setEndDate action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate sortByAmount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should generate sortByDate action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should generate setFilterText action object with provided values', () => {
    const action = setFilterText('testString');
    expect(action).toEqual({
        type: 'TEXT_FILTER',
        text: 'testString'
    });
});

test('should generate setFilterText action object with default values', () => {
    const action = setFilterText();
    expect(action).toEqual({
        type: 'TEXT_FILTER',
        text: ''
    });
});