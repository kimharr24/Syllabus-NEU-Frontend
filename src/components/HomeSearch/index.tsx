import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {
    Paper,
    Box,
    MenuItem,
    FormControl,
    Stack,
    IconButton,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { NEU_RED } from '../../utils/colors';
import { Semester } from '../../assets/Semester';
import { AvailableSemesters } from '../../assets/AvailableSemesters';

const SearchButton = styled(IconButton)`
    && {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        background-color: ${NEU_RED};
        color: #fff;
    }
`;

const SearchInput = styled('input')`
    border: none;
    padding: 0;
    width: 100%;
    height: 100%;
`;

const HomeSearch: React.FC = () => {
    const defaultAvailableSemester: Semester = {
        id: 0,
        semester: 'Fall 2020',
    };

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSemester, setSelectedSemester] = useState(
        defaultAvailableSemester.semester,
    );
    const [availableSemesters, setAvailableSemesters] = useState<Semester[]>([
        defaultAvailableSemester,
    ]);

    const handleSelectedSemester = (event: SelectChangeEvent) => {
        setSelectedSemester(event.target.value);
    };

    const handleSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    useEffect(() => {
        // query DynamoDB to find semesters containing data
        // use static data for now
        setAvailableSemesters(AvailableSemesters);
    }, []);

    return (
        <Stack direction='row'>
            <Box sx={{ width: '35%' }}>
                <FormControl fullWidth size='small'>
                    <Select
                        value={selectedSemester}
                        onChange={handleSelectedSemester}
                        MenuProps={{
                            PaperProps: { style: { maxHeight: '20vh' } },
                        }}
                        sx={{
                            borderTopLeftRadius: '10px',
                            borderBottomLeftRadius: '10px',
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                            backgroundColor: '#fff',
                        }}>
                        {availableSemesters.map((semesterObj: Semester) => {
                            return (
                                <MenuItem
                                    value={semesterObj.semester}
                                    key={semesterObj.id}>
                                    {semesterObj.semester}
                                </MenuItem>
                            );
                        })}
                    </Select>
                </FormControl>
            </Box>
            <Paper
                id='search-query-form'
                elevation={0}
                component='form'
                sx={{ width: '50%', paddingLeft: '10px', borderRadius: 0 }}
                onSubmit={() => {}}>
                <SearchInput
                    value={searchQuery}
                    onChange={handleSearchQuery}
                    placeholder='Class, professor, or course'
                />
            </Paper>
            <SearchButton disableRipple type='submit' form='search-query-form'>
                <SearchOutlinedIcon />
            </SearchButton>
        </Stack>
    );
};

export default HomeSearch;
