function Crypto({ id, name, last, buy, sell, volume, base_unit }) {
  return (
    <tr>
      <td>
        <h4 className="table-text">{id}</h4>
      </td>
      <td>
        <a
          target="_blank"
          href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&amp;utm_medium=affiliate&amp;utm_campaign=regnow-btn"
        >
          <h4 className="table-text">
            <span className="exchange-name">{name}</span>
          </h4>
        </a>
      </td>
      <td>
        <h4 className="table-text">₹ {last}</h4>
      </td>
      <td>
        <h4 className="table-text">
          <span>₹ {buy}</span>
        </h4>
      </td>
      <td>
        <h4 className="table-text profit">₹ {sell}</h4>
      </td>
      <td>
        <h4 className="table-text profit">{volume}</h4>
      </td>
      <td>
        <h4 className="table-text">{base_unit}</h4>
      </td>
    </tr>
  );
}

export default Crypto;
