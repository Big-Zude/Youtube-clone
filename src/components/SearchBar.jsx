import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState();
  const navigate = useNavigate();

  const handleSumbit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSumbit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        mr: { sm: 5 },
        boxShadow: 'none'
      }}
    >
      <input
        className="search-bar"
        placeholder="search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
