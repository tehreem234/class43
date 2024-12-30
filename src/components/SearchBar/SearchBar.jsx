import React from 'react';
import Button from '../Button/Button'
import Input from '../Input/Input';

const SearchBar = () => {
  return (
    <div className="flex  flex-wrap justify-between p-5 bg-gray-100">
      <Input placeholder="Job type" cn="w-[360px] p-2 relative bottom-2 rounded-3xl border"  />
      <Input placeholder="Job type" cn="w-[160px] p-2 relative bottom-2 rounded-3xl border"  />
      <Input placeholder="location" cn="w-[160px] p-2 relative bottom-2 rounded-3xl border" />
      <Button>Search</Button>
    </div>
  );
};

export default SearchBar;
