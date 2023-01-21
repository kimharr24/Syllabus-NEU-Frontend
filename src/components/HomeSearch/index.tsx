import React, { useState, useEffect } from 'react';
import { Box, MenuItem, FormControl, Stack } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SearchBar from '../SearchBar';
import { Semester } from '../../assets/Semester';
import { AvailableSemesters } from '../../assets/AvailableSemesters';

const HomeSearch: React.FC = () => {
    const defaultAvailableSemester: Semester = {
        id: -1,
        semester: 'All Semesters',
    };

    const [selectedSemester, setSelectedSemester] = useState(
        defaultAvailableSemester.semester,
    );
    const [availableSemesters, setAvailableSemesters] = useState<Semester[]>([
        defaultAvailableSemester,
    ]);

    const handleSelectedSemester = (event: SelectChangeEvent) => {
        setSelectedSemester(event.target.value);
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
                            borderTopLeftRadius: '5px',
                            borderBottomLeftRadius: '5px',
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
            <SearchBar selectedSemester={selectedSemester} />
        </Stack>
    );
};

export default HomeSearch;
