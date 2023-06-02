import * as React from 'react';
import { useTranslation } from 'next-i18next';
import { Autocomplete, Box, Paper, styled, TextField } from '@mui/material';
import { grey } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import { theme as twinTheme } from 'twin.macro';
import useSWR from 'swr';

import { LocationApi } from '@/hooks/useLocation';
import useDebounce from '@/hooks/useDebounce';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: twinTheme`colors.slate[700]`,
  '&:hover': {
    backgroundColor: twinTheme`colors.slate[600]`,
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledTextfield = styled(TextField)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(6)})`,
    marginLeft: `calc(1em + ${theme.spacing(2.5)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      width: theme.breakpoints.down('sm') ? '100%' : '20ch',
      [theme.breakpoints.up('md')]: {
        '&:focus': {
          width: theme.breakpoints.up('lg') ? 500 : 370,
        },
      },
    },
  },
}));

const CustomPaperComponent = (props: any) => (
  <Paper
    {...props}
    sx={{
      width: 1,
      marginTop: 0.5,
      backgroundColor: twinTheme`colors.slate[700]` as string,
      '& .MuiAutocomplete-listbox': {
        backgroundColor: twinTheme`colors.slate[600]` as string,

        '& .MuiAutocomplete-option': {
          ':hover': {
            backgroundColor: twinTheme`colors.slate[700]` as string,
          },
        },
      },
    }}
  />
);

type City = {
  name: string;
  country: string;
};

interface SearchbarProps {
  locationApi: LocationApi;
}

export default function Searchbar({ locationApi }: SearchbarProps) {
  const { t } = useTranslation(['common']);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const searchedCityDebounced = useDebounce(searchTerm, 500);

  const { data: cities } = useSWR<City[]>(
    open ? `/api/search-cities?q=${searchedCityDebounced}` : null
  );

  const { setCity } = locationApi;

  return (
    <Box
      sx={{
        width: {
          xs: 1,
          md: 'auto',
        },
        minWidth: { md: 300 },
        maxWidth: { md: 400, lg: 700 },
        px: { xs: 1, md: 0 },
        paddingTop: { xs: 1, md: 0 },
      }}
    >
      <Search>
        <Autocomplete
          placeholder={t('common:search') ?? ''}
          noOptionsText={'No results found for: ' + searchTerm}
          onChange={(_event, newValue: City | null) => {
            setCity(newValue?.name ?? '');
          }}
          popupIcon={''}
          open={open}
          onOpen={() => searchTerm.length >= 1 && setOpen(true)}
          onClose={() => setOpen(false)}
          onInputChange={(_event, newValue) => {
            setOpen(true);
            setSearchTerm(newValue);
          }}
          options={(cities && [...cities]) ?? []}
          getOptionLabel={(option) => `${(option as City).name}, ${(option as City).country}`}
          isOptionEqualToValue={(option, value) => option.name === value.name}
          disableClearable
          PaperComponent={CustomPaperComponent}
          renderInput={(params) => (
            <StyledTextfield
              {...params}
              size="small"
              placeholder="Search..."
              sx={{
                minWidth: 160,
                fieldset: { border: 'none' },
                '& .MuiInputBase-root': {
                  color: grey[100],
                },
              }}
              InputProps={{
                ...params.InputProps,
                startAdornment: <SearchIcon fontSize="small" tw="ml-2 absolute" />,
              }}
            />
          )}
        />
      </Search>
    </Box>
  );
}
