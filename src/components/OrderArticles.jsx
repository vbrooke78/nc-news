const OrderArticles = ({ setOrderBy }) => {
  const validOrderBys = [
    { name: 'Desc', apiName: 'desc' },
    { name: 'Asc', apiName: 'asc' },
  ];

  const handleChange = (e) => {
    setOrderBy(e.target.value);
  };

  return (
    <div className="orderby-container">
      <label htmlFor="order-by">Order by:</label>
      <select className="dropdown" id="sort-by" onChange={handleChange}>
        <option>--select--</option>
        {validOrderBys.map((order_by) => {
          return (
            <option key={order_by.name} value={order_by.apiName}>
              {order_by.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default OrderArticles;
