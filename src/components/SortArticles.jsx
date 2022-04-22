const SortArticles = ({ setSortBy }) => {
  const validSortBys = [
    { name: 'Author', apiName: 'author' },
    { name: 'Comments', apiName: 'comment_count' },
    { name: 'Date', apiName: 'created_at' },
    { name: 'Votes', apiName: 'votes' },
  ];

  const handleChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <>
      <label htmlFor="sort-by">Sort by:</label>
      <select className="dropdown" id="sort-by" onChange={handleChange}>
        <option>--select--</option>
        {validSortBys.map((sort_by) => {
          return (
            <option key={sort_by.name} value={sort_by.apiName}>
              {sort_by.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SortArticles;
