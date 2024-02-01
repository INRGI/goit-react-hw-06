import { useDispatch, useSelector } from 'react-redux';
import { Container, Input, Label } from './Filter.styled';
import { getFilters } from '../../redux/selectors';
import { setContactsFilter } from '../../redux/filtersSlice';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilters);

    const onFilterChange = dispatch(setContactsFilter(filter));

    return (
        <Container>
            <Label>
                Find contacts by name
                <Input type="text" value={filter} onChange={onFilterChange}/>
            </Label>
        </Container>
    );
};


export default Filter;